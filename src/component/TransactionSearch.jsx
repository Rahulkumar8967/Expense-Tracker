import React, { useState } from "react";
import { Table, Select, Radio } from "antd";
import { parse } from "papaparse";
import { toast } from "react-toastify";
import search from "../assets/search.svg";

const { Option } = Select;

const TransactionSearch = ({
  transactions,
  exportToCsv,
  addTransaction,
  fetchTransactions,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [sortKey, setSortKey] = useState("");

  const importFromCsv = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];

    if (file && file.type !== "text/csv") {
      toast.error("Please upload a valid CSV file.");
      return;
    }

    try {
      parse(file, {
        header: true,
        complete: async (results) => {
          for (const transaction of results.data) {
            const newTransaction = {
              ...transaction,
              amount: parseInt(transaction.amount),
            };
            await addTransaction(newTransaction, true);
          }
        },
      });
      toast.success("All Transactions Added");
      fetchTransactions();
      event.target.files = null;
    } catch (e) {
      toast.error(e.message);
    }
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Type", dataIndex: "type", key: "type" },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Amount", dataIndex: "amount", key: "amount" },
    { title: "Tag", dataIndex: "tag", key: "tag" },
  ];

  const filteredTransactions = transactions.filter((transaction) => {
    const searchMatch = searchTerm
      ? transaction.name.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    const tagMatch = selectedTag ? transaction.tag === selectedTag : true;
    const typeMatch = typeFilter ? transaction.type === typeFilter : true;
    return searchMatch && tagMatch && typeMatch;
  });

  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    if (sortKey === "date") return new Date(a.date) - new Date(b.date);
    if (sortKey === "amount") return a.amount - b.amount;
    return 0;
  });

  const dataSource = sortedTransactions.map((transaction, index) => ({
    key: index,
    ...transaction,
  }));

  return (
    <div className="w-full px-4 sm:px-8 lg:px-12 py-6 bg-gray-100 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row justify-between gap-4 items-center mb-6">
        <div className="flex items-center gap-2 w-full md:w-auto bg-white p-2 rounded-md shadow-sm">
          <img src={search} alt="Search Icon" width="16" />
          <input
            className="border-none outline-none w-full md:w-64"
            placeholder="Search by Name"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select
          className="w-full md:w-48 bg-white"
          onChange={(value) => setTypeFilter(value)}
          value={typeFilter}
          placeholder="Filter"
          allowClear
        >
          <Option value="">All</Option>
          <Option value="income">Income</Option>
          <Option value="expense">Expense</Option>
        </Select>
      </div>

      <div className="my-table bg-white p-4 rounded-lg shadow">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h2 className="text-2xl font-semibold text-center md:text-left">
            My Transactions
          </h2>

          <Radio.Group
            className="space-x-2"
            onChange={(e) => setSortKey(e.target.value)}
            value={sortKey}
          >
            <Radio.Button value="">No Sort</Radio.Button>
            <Radio.Button value="date">Sort by Date</Radio.Button>
            <Radio.Button value="amount">Sort by Amount</Radio.Button>
          </Radio.Group>

          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <button
              className="btn bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition shadow-md"
              onClick={exportToCsv}
            >
              Export to CSV
            </button>
            <label
              htmlFor="file-csv"
              className="btn bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-700 transition shadow-md text-center"
            >
              Import from CSV
            </label>
            <input
              onChange={importFromCsv}
              id="file-csv"
              type="file"
              accept=".csv"
              className="hidden"
            />
          </div>
        </div>

        <Table
          columns={columns}
          dataSource={dataSource}
          className="w-full overflow-x-auto"
        />
      </div>
    </div>
  );
};

export default TransactionSearch;
