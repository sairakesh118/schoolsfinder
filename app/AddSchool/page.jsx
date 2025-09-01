'use client'
import { useForm } from "react-hook-form";
import { useState } from "react";
import { 
  School, 
  MapPin, 
  Building, 
  Globe, 
  Phone, 
  Mail, 
  Upload, 
  CheckCircle, 
  AlertCircle,
  Loader2,
  Plus
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function AddSchool() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting }, 
    reset, 
    setValue, 
    watch 
  } = useForm();
  
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  
  const watchedImage = watch("image");

  const onSubmit = async (data) => {
    try {
      setMessage("");
      const res = await fetch("/api/addSchool", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        setMessage("success");
        reset();
        setImagePreview("");
        setTimeout(() => setMessage(""), 5000);
      } else {
        setMessage("error");
        setTimeout(() => setMessage(""), 5000);
      }
    } catch (err) {
      console.error(err);
      setMessage("error");
      setTimeout(() => setMessage(""), 5000);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => setImagePreview(e.target.result);
    reader.readAsDataURL(file);

    setUploading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "rakeshpostpreset");

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/sairakesh/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      setValue("image", data.secure_url);
      setUploading(false);
    } catch (err) {
      console.error(err);
      setUploading(false);
      setImagePreview("");
      setMessage("upload-error");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const InputField = ({ 
    icon: Icon, 
    type = "text", 
    placeholder, 
    name, 
    validation, 
    error 
  }) => (
    <div className="relative group">
      <div className="relative">
        <Icon className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-all duration-300 ${
          error ? 'text-red-500' : 'text-gray-400 group-focus-within:text-blue-500'
        }`} />
        <input
          type={type}
          placeholder={placeholder}
          {...register(name, validation)}
          className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl bg-white/70 backdrop-blur-sm transition-all duration-300 outline-none placeholder-gray-400 ${
            error
              ? 'border-red-500 bg-red-50/50 focus:border-red-600 focus:bg-red-50/80'
              : 'border-gray-200 focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-500/10'
          } transform hover:scale-[1.02] focus:scale-[1.02]`}
        />
      </div>
      {error && (
        <div className="flex items-center mt-2 text-red-600" style={{
          animation: 'slideInFromLeft 0.2s ease-out'
        }}>
          <AlertCircle className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">{error.message}</span>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col justify-center items-center">
          <Navbar />
        </div>
        <div className="text-center mb-12 mt-10" style={{
          animation: 'fadeInSlideDown 0.7s ease-out'
        }}>
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl mb-6 shadow-2xl shadow-blue-500/25">
            <School className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Add New School
          </h1>
          <p className="text-gray-600 text-lg">Register your educational institution</p>
        </div>

        {message && (
          <div className={`mb-8 p-6 rounded-2xl ${
            message === "success" 
              ? "bg-green-50 border-2 border-green-200 text-green-800" 
              : "bg-red-50 border-2 border-red-200 text-red-800"
          }`} style={{
            animation: 'slideInFromTop 0.3s ease-out'
          }}>
            <div className="flex items-center">
              {message === "success" ? (
                <CheckCircle className="w-6 h-6 mr-3 text-green-600" />
              ) : (
                <AlertCircle className="w-6 h-6 mr-3 text-red-600" />
              )}
              <span className="font-semibold text-lg">
                {message === "success" && "School added successfully!"}
                {message === "error" && "Failed to add school. Please try again."}
                {message === "upload-error" && "Image upload failed. Please try again."}
              </span>
            </div>
          </div>
        )}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-black/10 border border-white/20" style={{
          animation: 'fadeInSlideUp 0.7s ease-out'
        }}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            
            <div style={{ animation: 'slideInFromLeft 0.5s ease-out 0.1s both' }}>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                School Name
              </label>
              <InputField
                icon={School}
                placeholder="Enter school name"
                name="name"
                validation={{ required: "School name is required" }}
                error={errors.name}
              />
            </div>
            <div style={{ animation: 'slideInFromLeft 0.5s ease-out 0.2s both' }}>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Address
              </label>
              <InputField
                icon={MapPin}
                placeholder="Enter full address"
                name="address"
                validation={{ required: "Address is required" }}
                error={errors.address}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div style={{ animation: 'slideInFromLeft 0.5s ease-out 0.3s both' }}>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  City
                </label>
                <InputField
                  icon={Building}
                  placeholder="Enter city"
                  name="city"
                  validation={{ required: "City is required" }}
                  error={errors.city}
                />
              </div>
              <div style={{ animation: 'slideInFromRight 0.5s ease-out 0.3s both' }}>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  State
                </label>
                <InputField
                  icon={Globe}
                  placeholder="Enter state"
                  name="state"
                  validation={{ required: "State is required" }}
                  error={errors.state}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div style={{ animation: 'slideInFromLeft 0.5s ease-out 0.4s both' }}>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Contact Number
                </label>
                <InputField
                  icon={Phone}
                  type="tel"
                  placeholder="Enter contact number"
                  name="contact"
                  validation={{ 
                    required: "Contact number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Please enter a valid 10-digit number"
                    }
                  }}
                  error={errors.contact}
                />
              </div>
              <div style={{ animation: 'slideInFromRight 0.5s ease-out 0.4s both' }}>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Email Address
                </label>
                <InputField
                  icon={Mail}
                  type="email"
                  placeholder="Enter email address"
                  name="email_id"
                  validation={{ 
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Please enter a valid email address"
                    }
                  }}
                  error={errors.email_id}
                />
              </div>
            </div>

            <div style={{ animation: 'slideInFromBottom 0.5s ease-out 0.5s both' }}>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                School Image
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className={`flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                    errors.image 
                      ? 'border-red-300 bg-red-50/50' 
                      : 'border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50'
                  }`}
                >
                  {imagePreview ? (
                    <div className="relative w-full h-full">
                      <img 
                        src={imagePreview} 
                        alt="Preview" 
                        className="w-full h-full object-cover rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <Upload className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      {uploading ? (
                        <Loader2 className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
                      ) : (
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      )}
                      <p className="text-gray-600 font-medium">
                        {uploading ? "Uploading..." : "Click to upload school image"}
                      </p>
                      <p className="text-gray-400 text-sm mt-1">
                        PNG, JPG up to 10MB
                      </p>
                    </div>
                  )}
                </label>
                
                <input
                  type="hidden"
                  {...register("image", { required: "School image is required" })}
                />
                
                {errors.image && (
                  <div className="flex items-center mt-3 text-red-600">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{errors.image.message}</span>
                  </div>
                )}
              </div>
            </div>

            <div style={{ animation: 'slideInFromBottom 0.5s ease-out 0.6s both' }}>
              <button
                type="submit"
                disabled={isSubmitting || uploading}
                className="w-full py-4 px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-blue-500/30"
              >
                <div className="flex items-center justify-center">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                      Adding School...
                    </>
                  ) : (
                    <>
                      <Plus className="w-6 h-6 mr-3" />
                      Add School
                    </>
                  )}
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInSlideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}