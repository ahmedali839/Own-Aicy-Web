// import React, { useContext } from 'react'
// import { UserDataContext } from '../../stores/userContext';

// const Profile = () => {

//   const { user, setUser } = useContext(UserDataContext)

//   return (
//     <div></div>
//   )
// }

// export default Profile




















// import React, { useState, useContext, useRef } from 'react'
// import { Link, useNavigate } from "react-router-dom"
// import axios from "axios"
// import { useForm } from 'react-hook-form';
// import ReCAPTCHA from "react-google-recaptcha"
// import { UserDataContext } from '../../stores/userContext';

// const Profile = () => {
//   const navigate = useNavigate()
//   const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm();
//   const [isReadyOnly, setIsReadOnly] = useState(true)

//   const { user, setUser } = useContext(UserDataContext)

//   const NameInputRef = useRef()
//   const EmailInputRef = useRef()


//   // Handle Form Submit
//   const submitform = async (data) => {

//     try {
//       const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/login`, data)
//       if (res.status === 200) {
//         console.log(res);
//         setUser(res.data.user)
//         localStorage.setItem("token", res.data.token)
//         navigate("/profile")
//       } else {
//         setError("root", { message: res.data.message || "Invalid credentials" });
//       }
//     } catch (err) {
//       setError("root", { message: err.response?.data?.message || "Login failed, try again" });
//     }
//   }

//   return (
//     <div className='mt-[3vw] flex justify-center'>

//       {console.log(user)}

//       <div className='m-5 p-10 border border-orange-400 rounded-xl md:w-[50%]'>

//         <div className='text-center md:w-[50%]'>
//           <h2 className='text-2xl font-extrabold'>Welcome {user?.name.split(" ")[0]}</h2>
//           <h5>Congrats you to be a family member.</h5>
//         </div>


//         <form onSubmit={handleSubmit(submitform)}>
//           <div className='mt-5 text-start md:w-[50%] space-y-5'>

//             <div className='flex flex-col '>
//               <label htmlFor="name" className='font-medium text-sm'>Your name</label>

//               <input type="text" name="name" value={user?.name || "name"} placeholder='name_123' required
//                 {...register("name", { required: "name is required." })}
//                 readOnly
//                 className='mt-1 px-3 py-2 w-full border border-gray-700
//                                         text-sm rounded-md bg-transparent
//                                        focus:outline-none focus:ring-1 focus:ring-white
//                                        '/>
//               {errors.name && <p className='text-red-600 text-sm mt-1'>{errors.name.message}</p>}
//             </div>

//             {console.log(user)}

//             <div className='flex flex-col '>
//               <label htmlFor="email" className='font-medium text-sm'>Your verified email</label>
//               <input type="email" value={user?.email || "email"} name="email" placeholder='email@example.com' required
//                 {...register("email", { required: "Email is required." })}
//                 readOnly
//                 className='mt-1 px-3 py-2 w-full border border-gray-700
//                                         text-sm rounded-md bg-transparent
//                                        focus:outline-none focus:ring-1 focus:ring-white
//                                        '/>
//               {errors.email && <p className='text-red-600 text-sm mt-1'>{errors.email.message}</p>}
//             </div>


//             {errors.root && <p className='text-red-600 text-sm mt-1'>{errors.root.message}</p>}

//             <div className='flex flex-col '>
//               <button type="submit" disabled={isSubmitting} className='font-bold bg-gray-700 w-full outline-none p-2 rounded-lg text-white cursor-pointer hover:bg-gray-600'>{isSubmitting ? "Loggin in..." : "Continue"}</button>
//             </div>

//           </div>
//         </form>

//         <div className='flex mt-10 justify-center'>
//           <p>Jump back to home? <Link to={"/"} className='underline'>home</Link></p>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Profile











































import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useForm } from 'react-hook-form';
import { UserDataContext } from '../../stores/userContext';
import { FaDoorOpen, FaEdit, FaSave, FaTimes } from 'react-icons/fa'; // You'll need react-icons
import { Button } from '../../components/ui/button';
import { FiLogOut } from "react-icons/fi";

const Profile = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, setError, setValue, formState: { errors, isSubmitting } } = useForm();

  const { user, setUser } = useContext(UserDataContext)

  // State for edit mode
  const [isEditingName, setIsEditingName] = useState(false)
  const [isEditingEmail, setIsEditingEmail] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)

  // Store original values for cancel functionality
  const [originalName, setOriginalName] = useState(user?.name || "")
  const [originalEmail, setOriginalEmail] = useState(user?.email || "")

  // Update form values when user changes
  useEffect(() => {
    if (user) {
      setValue("name", user.name)
      setValue("email", user.email)
      setOriginalName(user.name)
      setOriginalEmail(user.email)
    }
  }, [user, setValue])

  // Check if any field is in edit mode
  const isAnyFieldEditing = isEditingName || isEditingEmail

  // Handle Edit button click
  const handleEditName = () => {
    setIsEditingName(true)
  }

  const handleEditEmail = () => {
    setIsEditingEmail(true)
  }

  // Handle Cancel edit
  const handleCancelEdit = () => {
    // Restore original values
    setValue("name", originalName)
    setValue("email", originalEmail)

    // Exit edit mode
    setIsEditingName(false)
    setIsEditingEmail(false)
  }

  // Handle Update Submit
  const handleUpdateProfile = async (data) => {
    setIsUpdating(true)

    try {
      const token = localStorage.getItem("token")

      // Send only changed fields
      const updateData = {}
      if (isEditingName && data.name !== originalName) {
        updateData.name = data.name
      }
      if (isEditingEmail && data.email !== originalEmail) {
        updateData.email = data.email
      }

      // If nothing changed, just exit edit mode
      if (Object.keys(updateData).length === 0) {
        setIsEditingName(false)
        setIsEditingEmail(false)
        setIsUpdating(false)
        return
      }


      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/users/update-profile`,
        updateData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      if (res.status === 200) {
        // Update user context with new data
        setUser(res.data.user)

        // Update original values
        setOriginalName(res.data.user.name)
        setOriginalEmail(res.data.user.email)

        // Exit edit mode
        setIsEditingName(false)
        setIsEditingEmail(false)

        // Show success message (optional)
        alert("Profile updated successfully!")
      }
    } catch (err) {
      setError("root", {
        message: err.response?.data?.message || "Failed to update profile"
      })
    } finally {
      setIsUpdating(false)
    }
  }


  const handleLogout = async () => {
    try {

      const token = localStorage.getItem("token")

      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/logout`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      if (res.status == 200) {
        localStorage.removeItem("token")
        setUser()
        navigate("/")
        window.location.reload()
      }
    } catch (error) {
      console.log("User loggedOut not successfully.", error)
    }

  }

  return (
    <div className='mt-[3vw] flex justify-center'>
      <div className='m-5 p-10 border border-orange-400 rounded-xl md:w-[50%]'>

        <div className='text-center mb-8'>
          <h2 className='text-2xl font-extrabold'>
            Welcome {user?.name?.split(" ")[0] || "User"}
          </h2>
          <h5>Congrats you to be a family member.</h5>
        </div>

        <form onSubmit={handleSubmit(handleUpdateProfile)}>
          <div className='mt-5 text-start space-y-5'>

            {/* Name Field */}
            <div className='flex flex-col'>
              <label htmlFor="name" className='font-medium text-sm'>
                Your name
              </label>

              <div className='relative'>
                <input
                  type="text"
                  name="name"
                  placeholder='name_123'
                  {...register("name", {
                    required: "Name is required.",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters"
                    }
                  })}
                  readOnly={!isEditingName}
                  className={`mt-1 px-3 py-2 pr-10 w-full border border-gray-700
                    text-sm rounded-md bg-transparent
                    focus:outline-none focus:ring-1 focus:ring-white
                    ${!isEditingName ? 'cursor-not-allowed opacity-70' : ''}
                  `}
                />

                {/* Edit Icon */}
                {!isEditingName && (
                  <button
                    type="button"
                    onClick={handleEditName}
                    className='absolute right-3 top-1/2 transform -translate-y-1/2 
                      text-gray-400 hover:text-orange-400 transition-colors'
                  >
                    <FaEdit className='w-4 h-4' />
                  </button>
                )}
              </div>

              {errors.name && (
                <p className='text-red-600 text-sm mt-1'>{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div className='flex flex-col'>
              <label htmlFor="email" className='font-medium text-sm'>
                Your verified email
              </label>

              <div className='relative'>
                <input
                  type="email"
                  name="email"
                  placeholder='email@example.com'
                  {...register("email", {
                    required: "Email is required.",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  readOnly={!isEditingEmail}
                  className={`mt-1 px-3 py-2 pr-10 w-full border border-gray-700
                    text-sm rounded-md bg-transparent
                    focus:outline-none focus:ring-1 focus:ring-white
                    ${!isEditingEmail ? 'cursor-not-allowed opacity-70' : ''}
                  `}
                />

                {/* Edit Icon */}
                {!isEditingEmail && (
                  <button
                    type="button"
                    onClick={handleEditEmail}
                    className='absolute right-3 top-1/2 transform -translate-y-1/2 
                      text-gray-400 hover:text-orange-400 transition-colors'
                  >
                    <FaEdit className='w-4 h-4' />
                  </button>
                )}
              </div>

              {errors.email && (
                <p className='text-red-600 text-sm mt-1'>{errors.email.message}</p>
              )}
            </div>

            {/* Error Message */}
            {errors.root && (
              <p className='text-red-600 text-sm mt-1'>{errors.root.message}</p>
            )}

            {/* Save/Cancel Buttons - Show only when editing */}
            {isAnyFieldEditing && (
              <div className='flex gap-3'>
                <Button
                  type="submit"
                  disabled={isUpdating}
                  className='flex-1 flex items-center justify-center gap-2 
                    font-bold bg-orange-500 outline-none p-2 rounded-lg 
                    text-white cursor-pointer hover:bg-orange-600 
                    disabled:opacity-50 disabled:cursor-not-allowed
                    transition-colors'
                >
                  <FaSave className='w-4 h-4' />
                  {isUpdating ? "Saving..." : "Save Changes"}
                  {/* </button> */}
                </Button>

                {/* <button */}
                <Button
                  type="button"
                  onClick={handleCancelEdit}
                  disabled={isUpdating}
                  className='flex-1 flex items-center justify-center gap-2
                  font-bold bg-gray-600 outline-none p-2 rounded-lg
                  text-white cursor-pointer hover:bg-gray-700 border-transparent
                  disabled:opacity-50 disabled:cursor-not-allowed
                  transition-colors'
                >
                  <FaTimes className='w-4 h-4' />
                  Cancel
                </Button>
                {/* </button> */}
              </div>
            )}
          </div>
        </form>


        <div className='text-right mt-8'>
          <Button
            onClick={handleLogout}>
            Logout <FiLogOut />
          </Button>
        </div>


        <div className='flex mt-10 justify-center'>
          <p>
            Jump back to home? <Link to={"/"} className='underline'>home</Link>
          </p>
        </div>
      </div>
    </div >
  )
}

export default Profile


