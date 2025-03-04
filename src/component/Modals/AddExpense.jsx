import React from "react";
import { Modal, Form, Input, DatePicker, Button } from "antd";

function AddExpenseModal({
  isExpenseModalVisible,
  handleExpenseCancel,
  onFinish,
}) {
  const [form] = Form.useForm();

  return (
    <Modal
      title="Add Expense"
      open={isExpenseModalVisible}
      onCancel={handleExpenseCancel}
      footer={null}
      className="font-semibold"
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={(values) => {
          onFinish(values, "expense");
          form.resetFields();
        }}
        className="space-y-4"
      >
        {/* Expense Name Input */}
        <Form.Item
          label={
            <span className="text-gray-700 font-medium">Expense Name</span>
          }
          name="name"
          rules={[
            { required: true, message: "Please input the expense name!" },
          ]}
        >
          <Input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </Form.Item>

        {/* Type Selection */}
        <Form.Item
          label={<span className="text-gray-700 font-medium">Type</span>}
          name="type"
          rules={[{ required: true, message: "Please input the type!" }]}
        >
          <Input
            type="text"
            placeholder="what Type of expense"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </Form.Item>

        {/* Date Picker */}
        <Form.Item
          label={<span className="text-gray-700 font-medium">Date</span>}
          name="date"
          rules={[{ required: true, message: "Please select the date!" }]}
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
          rules={[{ required: true, message: "Please input the amount!" }]}
        >
          <Input
            type="number"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </Form.Item>

        {/* Tag Input Field (Text Input) */}
        <Form.Item
          label={<span className="text-gray-700 font-medium">Tag</span>}
          name="tag"
          rules={[{ required: true, message: "Please input a tag!" }]}
        >
          <Input
            type="text"
            placeholder="Enter a tag (e.g., Food, Rent, Shopping)"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Add Expense
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default AddExpenseModal;
