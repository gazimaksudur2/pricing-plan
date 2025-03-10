import { useForm } from "react-hook-form";

export default function OrderForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-center text-2xl font-bold">Order Form</h2>
      <h3 className="text-center text-xl mb-6">Start a Project</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          {/* Selected Type */}
          <div>
            <label className="block text-gray-700">Selected Type</label>
            <input
              className="w-full p-2 border rounded bg-gray-200"
              value="Design & Production"
              readOnly
            />
          </div>
          {/* Package Type */}
          <div>
            <label className="block text-gray-700">Package Type</label>
            <input
              className="w-full p-2 border rounded bg-gray-200"
              value="Web Design"
              readOnly
            />
          </div>
          {/* Budget */}
          <div>
            <label className="block text-gray-700">Budget</label>
            <div className="flex items-center border rounded bg-gray-200 p-2">
              <span className="mr-2">$</span>
              <input
                className="w-full bg-transparent outline-none"
                value="1000"
                readOnly
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            {...register("name")}
            className="p-2 border rounded"
            placeholder="Your name"
            required
          />
          <input
            {...register("email")}
            className="p-2 border rounded"
            placeholder="Your email"
            required
          />
          <input
            {...register("companyName")}
            className="p-2 border rounded"
            placeholder="Your company name"
            required
          />
          <input
            {...register("website")}
            className="p-2 border rounded"
            placeholder="Your website address"
          />
          <input
            {...register("phone")}
            className="p-2 border rounded"
            placeholder="(201) 555-5555"
            required
          />
          <input
            {...register("socialLink")}
            className="p-2 border rounded"
            placeholder="Any social link"
          />
        </div>

        <textarea
          {...register("message")}
          className="w-full p-2 border rounded"
          placeholder="Your message"
        ></textarea>

        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          type="submit"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
}
