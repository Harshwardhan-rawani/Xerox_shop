import React, { useState, useEffect } from 'react';
import { FaUpload } from "react-icons/fa";
import { LiaRupeeSignSolid } from "react-icons/lia";
const Print = () => {
  const [formData, setFormData] = useState({
    file: null,
    pages: '',
    quantity: '1',
    printType: 'bw', // Default value
  });
const [total,settotal]= useState(0)
  useEffect(()=>{
    const cal = ()=>{
        if(formData.printType === "bw" && formData.pages > 0 && formData.quantity > 0){
           settotal(Number(formData.pages)*5*Number(formData.quantity))
        }
        else if(formData.printType === "color" &&formData.pages > 0 && formData.quantity > 0){
            settotal(Number(formData.pages)*10*Number(formData.quantity))
        }
        else{
            settotal(0)
        }
    }
    cal()
  },[formData])
  const [filePreview, setFilePreview] = useState('');
 

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (id === 'file') {
      const file = files ? files[0] : null;
      setFormData((prevData) => ({
        ...prevData,
        [id]: file,
      }));
      
      if (file && file.type.startsWith('image/')) {
        const previewUrl = URL.createObjectURL(file);
        setFilePreview(previewUrl);
      } else {
        setFilePreview(''); // Clear preview if not an image
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  useEffect(() => {
    // Clean up URL object when component unmounts
    return () => {
      if (filePreview) {
        URL.revokeObjectURL(filePreview);
      }
    };
  }, [filePreview]);

  return (
    <div className="min-h-[92vh] flex items-center justify-center bg-white ">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Form</h2>

        <div className="mb-4">
          <label className="text-gray-700 text-sm  font-bold mb-2 border-2 rounded-md flex flex-col items-center justify-center py-5 cursor-pointer">
            <div className='flex flex-col items-center'>
              <div className='flex justify-center text-3xl text-gray-500 mb-2'><FaUpload /></div>
              <div className='text-gray-500'>Choose JPEG only</div>
              {filePreview && (
                <img
                  src={filePreview}
                  alt="File preview"
                  className="mt-2 max-w-full h-auto"
                />
              )}
              {formData.file && (
                <div className="mt-2 text-gray-700">
                  {formData.file.name}
                </div>
              )}
            </div>
            <input
              type="file"
              id="file"
              onChange={handleChange}
              className="hidden"
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pages">
            Number of Pages
          </label>
          <input
            type="number"
            id="pages"
            value={formData.pages}
            onChange={handleChange}
            placeholder="Enter number of pages"
            className="appearance-none w-full py-2 px-3 text-gray-700 border-b-2 border-gray-300 focus:outline-none focus:border-gray-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Enter quantity"
            className="appearance-none w-full py-2 px-3 text-gray-700 border-b-2 border-gray-300 focus:outline-none focus:border-gray-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="printType">
            Print Type
          </label>
          <select
            id="printType"
            value={formData.printType}
            onChange={handleChange}
            className="appearance-none w-full py-2 px-3 text-gray-700 border-b-2 border-gray-300 focus:outline-none focus:border-gray-500"
          >
            <option className="text-gray-700" value="bw">Black & White</option>
            <option className="text-gray-700" value="color">Color</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
            <div className='flex w-full justify-between items-center'>
            <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Order
          </button>
          <div className='text-green-600 border-b-2 border-b-green-400 flex items-center'>Total :-<LiaRupeeSignSolid />{total}.00</div>
            </div>
      
        </div>
      </form>
    </div>
  );
};

export default Print;
