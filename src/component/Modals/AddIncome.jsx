import React from "react";
import { Modal, Form, Input, DatePicker, Select, Button } from "antd";

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
          onFinish(values);
          form.resetFields();
        }}
        className="space-y-4"
      >
        {/* Name Input */}
        <Form.Item
          label="Income Source"
          name="name"
          rules={[{ required: true, message: "Please enter income source" }]}
        >
          <Input
            placeholder="Enter income source"
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
            <Select.Option value="salary">Salary</Select.Option>
            <Select.Option value="freelance">Freelance</Select.Option>
            <Select.Option value="investment">Investment</Select.Option>
            <Select.Option value="business">Business</Select.Option>
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
            className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
          >
            Add Income
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default AddIncomeModal;
