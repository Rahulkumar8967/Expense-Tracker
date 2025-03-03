import React from "react";
import { Modal, Form, Input, DatePicker, Select, Button } from "antd";

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
          onFinish(values);
          form.resetFields();
        }}
        className="space-y-4"
      >
        {/* Name Input */}
        <Form.Item
          label="Expense Name"
          name="name"
          rules={[{ required: true, message: "Please enter expense name" }]}
        >
          <Input
            placeholder="Enter expense name"
            className="border rounded-md px-3 py-2"
          />
        </Form.Item>

        {/* Amount Input */}
        <Form.Item
          label="Amount"
          name="amount"
          rules={[{ required: true, message: "Please enter amount" }]}
        >
          <Input
            type="number"
            placeholder="Enter amount"
            className="border rounded-md px-3 py-2"
          />
        </Form.Item>

        {/* Date Picker */}
        <Form.Item
          label="Date"
          name="date"
          rules={[{ required: true, message: "Please select a date" }]}
        >
          <DatePicker
            format="YYYY-MM-DD"
            className="w-full border rounded-md px-3 py-2"
          />
        </Form.Item>

        {/* Category Selection */}
        <Form.Item
          label="Category"
          name="category"
          rules={[{ required: true, message: "Please select a category" }]}
        >
          <Select placeholder="Select category" className="border rounded-md">
            <Select.Option value="food">Food</Select.Option>
            <Select.Option value="transport">Transport</Select.Option>
            <Select.Option value="shopping">Shopping</Select.Option>
            <Select.Option value="bills">Bills</Select.Option>
          </Select>
        </Form.Item>

        {/* Notes Input */}
        <Form.Item label="Notes" name="notes">
          <Input.TextArea
            placeholder="Additional notes (optional)"
            className="border rounded-md px-3 py-2"
          />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            Add Expense
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default AddExpenseModal;
