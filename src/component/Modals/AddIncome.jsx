// eslint-disable-next-line no-unused-vars
import React from "react";
import { Modal, Form, Input, DatePicker, Button } from "antd";

function AddIncomeModal({
  isIncomeModalVisible,
  handleIncomeCancel,
  onFinish,
}) {
  const [form] = Form.useForm();

  return (
    <Modal
      title="Add Income"
      open={isIncomeModalVisible}
      onCancel={handleIncomeCancel}
      footer={null}
      className="font-semibold"
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={(values) => {
          onFinish(values, "income");
          form.resetFields();
        }}
        className="space-y-4"
      >
        {/* Income Name Input */}
        <Form.Item
          label={<span className="text-gray-700 font-medium">Income Name</span>}
          name="name"
          rules={[{ required: true, message: "Please input the income name!" }]}
        >
          <Input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </Form.Item>

        {/* Type Input */}
        <Form.Item
          label={<span className="text-gray-700 font-medium">Type</span>}
          name="type"
          rules={[{ required: true, message: "Please input the income type!" }]}
        >
          <Input
            type="text"
            placeholder="Enter type (e.g., Salary, Freelance, Investment)"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </Form.Item>

        {/* Date Picker */}
        <Form.Item
          label={<span className="text-gray-700 font-medium">Date</span>}
          name="date"
          rules={[
            { required: true, message: "Please select the income date!" },
          ]}
        >
          <DatePicker
            format="YYYY-MM-DD"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </Form.Item>

        {/* Amount Input */}
        <Form.Item
          label={<span className="text-gray-700 font-medium">Amount</span>}
          name="amount"
          rules={[
            { required: true, message: "Please input the income amount!" },
          ]}
        >
          <Input
            type="number"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </Form.Item>

        {/* Tag Input Field */}
        <Form.Item
          label={<span className="text-gray-700 font-medium">Tag</span>}
          name="tag"
          rules={[{ required: true, message: "Please input a tag!" }]}
        >
          <Input
            type="text"
            placeholder="Enter a tag (e.g., Bonus, Side Hustle)"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-green-600 text-white font-medium py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Add Income
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default AddIncomeModal;
