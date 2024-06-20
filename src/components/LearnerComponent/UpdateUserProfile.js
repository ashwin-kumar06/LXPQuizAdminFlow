import React from 'react';
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { ValidationUpdateUserProfile } from '../../utils/LearnerValidations/ValidationUpdateUserProfile';
import { useEffect } from 'react';
import { getUserProfileRequest } from '../../actions/LearnerAction/GetUpdateUserProfileAction';
import { put_user_profile_request } from '../../actions/LearnerAction/UpdateUserProfileAction';
import LearnerNavbar from '../LearnerComponent/LearnerNavbar';
import { fetchUserData } from '../../middleware/LearnerMiddleware/GetUserProfileMiddleware';
import Select from 'react-select';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import IconButton from '@mui/material/IconButton';
import '../../Styles/Learner/UpdateProfile.css';
import { Block } from '@mui/icons-material';

const options = [
  { value: 'C++', label: 'C++' },
  { value: 'LINQ', label: 'LINQ' },
  { value: '.NET', label: '.NET' },
  { value: 'C#', label: 'C#' },
  { value: 'JAVA', label: 'JAVA' },
  { value: 'RUST', label: 'RUST' },
  { value: 'Python', label: 'Python' },
];

function UpdateUserProfileComponent() {
  const dispatch = useDispatch();
  const [LearnerId] = useState(sessionStorage.getItem('ProfileId'));
  const [editInfo, setEditInfo] = useState({
    ProfileId: "",
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    contactNumber: "",
    stream: "",
    profilePhoto: "",
  });
  const [isEditable, setIsEditable] = useState(false);
  const [file, setFile] = useState(null);

  const calculateMaxDate = () => {
    const today = new Date();
    today.setFullYear(today.getFullYear() - 18);
    return today.toISOString().split("T")[0];
  };

  const fetch = async (LearnerId) => {
    try {
      const userData = await fetchUserData(LearnerId);
      sessionStorage.setItem("userData", userData.profilePhoto);
      setEditInfo(userData);
    } catch (error) {
      console.error('Error in fetch: ', error);
    }
  };

  useEffect(() => {
    const data = fetch(LearnerId);
    setEditInfo(data);
  }, [setEditInfo]);

  const updateStatus = async () => {
    const errors = ValidationUpdateUserProfile(editInfo);
    if (Object.keys(errors).length > 0) {
      if (errors.contactNumber) {
        alert(errors.contactNumber);
      } else {
        alert("Please insert all the required fields.");
      }
      console.error("Validation errors", errors);
      return;
    }

    try {
      const updatedEditInfo = {
        ...editInfo,
        stream: Array.isArray(editInfo.stream) ? editInfo.stream.join(", ") : editInfo.stream,
      };

      const response = await dispatch(put_user_profile_request(LearnerId, updatedEditInfo));
      if (response.status === 200) {
        // ...
      } else {
        alert("Profile updated successfully");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Profile updated successfully");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'stream') {
      const selectedValues = value.map(option => option.value);
      setEditInfo((prevEditInfo) => ({ ...prevEditInfo, stream: selectedValues }));
    } else {
      setEditInfo((prevEditInfo) => ({ ...prevEditInfo, [name]: value }));
    }
  };

  const enableEditing = () => {
    setIsEditable(!isEditable);
  };

  const handleThumbnailChange = (event) => {
    event.preventDefault();
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFile(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
      setEditInfo({ ...editInfo, profilePhoto: event.target.files[0] });
    }
  };

  const formatStreamData = (stream) => {
    if (Array.isArray(stream)) {
      return stream.map(s => ({ value: s, label: s }));
    }
    return [{ value: stream, label: stream }];
  };

  return (
    <>
      <LearnerNavbar />
      <div className="background-container_update">
        <div className="cardcolor_update"   >
          <div className="card-update" >
            <h1 className="card-updatetitle text-center mb-4" style={{ color: "#27235C", marginRight: '35px' }}>My Profile</h1>
            <div className="row">
              <div className="col-md-2 text-center  mb-4">
                <Avatar
                  alt="User Avatar"
                  src={file || (editInfo && editInfo.profilePhoto ? editInfo.profilePhoto : "default-avatar.png")}
                  style={{ width: "200px", height: "200px", marginTop: 80, }}
                  className='avatar-outline'
                />
                <IconButton

                  color="primary"
                  aria-label="upload picture"
                  component="label"
                  disabled={!isEditable}
                >
                  <input
                    type="file"
                    id="profile"
                    name="profilePhoto"
                    onChange={handleThumbnailChange}
                    accept="image/jpeg, image/png, image/gif, image/bmp, image/svg+xml"
                    style={{ display: "none" }}
                  />
                  <CameraAltIcon sx={{ color: "#27235C", marginTop: 1 }} />
                </IconButton>
              </div>
              <div className="col-md-4" sx={{ marginRight: 60 }}>

                <div className="mb-4 get">
                  <h5>First Name</h5>
                  <input
                    type="text"
                    name="firstName"
                    className="form-control_update"
                    placeholder="First Name"
                    color="#27235C"
                    value={editInfo.firstName}
                    onChange={handleInputChange}
                    disabled={!isEditable}
                    onKeyPress={(event) => {
                      if (!/^[A-Za-z]+$/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  />
                </div>
                <div className="mb-4 get">
                  <h5>DOB</h5>
                  <input
                    type="date"
                    name="dob"
                    className="form-control_update"
                    placeholder="Date of Birth"
                    value={editInfo.dob}
                    color="#27235C"
                    onChange={handleInputChange}
                    disabled={!isEditable}
                    max={calculateMaxDate()}
                    onKeyDown={(e) => e.preventDefault()}
                  />
                </div>
                <div className="mb-4">
                  <h5>Contact Number</h5>
                  <input
                    type="number"
                    name="contactNumber"
                    className="form-control_update"
                    color="#27235C"
                    placeholder="Contact Number"
                    value={editInfo.contactNumber}
                    onChange={handleInputChange}
                    disabled={!isEditable}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="mb-4">
                  <h5>Last Name</h5>
                  <input
                    type="text"
                    name="lastName"
                    className="form-control_update"
                    color="#27235C"
                    placeholder="Last Name"
                    value={editInfo.lastName}
                    onChange={handleInputChange}
                    disabled={!isEditable}
                    onKeyPress={(event) => {
                      if (!/^[A-Za-z]+$/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  />
                </div>
                <div className="mb-4">
                  <h5>Gender</h5>
                  <select
                    name="gender"
                    className="form-control_dropdown"
                    value={editInfo.gender}
                    color="#27235C"
                    type="text"
                    onChange={handleInputChange}
                    disabled={!isEditable}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-4">
                  <h5>Stream</h5>
                  <Select
                    isMulti
                    name="stream"
                    options={options}
                    type="text"
                    color="#27235C"

                    className="basic-multi-select_learner"
                    classNamePrefix="stream"
                    placeholder="Choose your stream"
                    value={formatStreamData(editInfo.stream)}
                    onChange={(selectedOption) => handleInputChange({ target: { name: "stream", value: selectedOption } })}
                    disabled={!isEditable}
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                type="button"
                className="btn btn-secondary_update"
                onClick={enableEditing}
              >
                Edit
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button
                type="button"
                className="btn btn-primary_update"
                onClick={() => {
                  if (isEditable) {
                    updateStatus();
                  }
                  enableEditing();
                }}
                disabled={!isEditable}
              >
                Save
              </button>

            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default UpdateUserProfileComponent;