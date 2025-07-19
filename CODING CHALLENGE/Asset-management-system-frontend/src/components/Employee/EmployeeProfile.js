import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Divider,
  Button,
  Modal,
  TextField,
  Container,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";
import '../../styles/EmployeeProfile.css'

const EmployeeProfile = () => {
  const [employee, setEmployee] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    setEmployee(storedUser);
    setFormData(storedUser);
  }, []);

  const handleEditOpen = () => setOpenModal(true);
  const handleEditClose = () => setOpenModal(false);

  const handleDelete = async () => {
    const confirm = window.confirm("⚠ This will permanently delete your account. Proceed?");
    if (!confirm || !employee?.id) return;

    try {
      await API.delete(`/deleteEmployee/${employee.id}`);
      alert("Account deleted.");
      localStorage.clear();
      navigate("/login");
    } catch (err) {
      console.error("Delete failed", err);
      alert("Something went wrong while deleting.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const requestDto = {
        name: formData.name,
        email: formData.email,
        contactNumber: formData.contactNumber,
        department: formData.department,
        designation: formData.designation,
        role: formData.role,
        joinDate: formData.joinDate,
        password: formData.password || "",
      };

      const res = await API.put(`/updateEmployee/${employee.id}`, requestDto);
      localStorage.setItem("loggedInUser", JSON.stringify(res.data));
      setEmployee(res.data);
      setOpenModal(false);
      alert("Profile updated!");
    } catch (err) {
      console.error("Update failed", err);
      alert("Failed to update profile.");
    }
  };

  if (!employee) return <Typography>Loading profile...</Typography>;

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar sx={{ bgcolor: "#5932EA", width: 64, height: 64 }}>
            <PersonIcon fontSize="large" />
          </Avatar>
          <Box>
            <Typography variant="h5">{employee.name}</Typography>
            <Typography variant="body1" color="text.secondary">
              {employee.designation}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ lineHeight: 2 }}>
          <Typography><strong>Name:</strong> {employee.name}</Typography>
          <Typography><strong>ID:</strong> {employee.id}</Typography>
          <Typography><strong>Email:</strong> {employee.email}</Typography>
          <Typography><strong>Contact Number:</strong> {employee.contactNumber}</Typography>
          <Typography><strong>Department:</strong> {employee.department}</Typography>
          <Typography><strong>Role:</strong> {employee.role}</Typography>
          <Typography><strong>Designation:</strong> {employee.designation || "—"}</Typography>
          <Typography><strong>Join Date:</strong> {employee.joinDate || "—"}</Typography>
        </Box>

        <Box mt={4} display="flex" justifyContent="space-between">
          <Button variant="contained" sx={{ bgcolor: "#4f46e5" }} onClick={handleEditOpen}>
            Edit Profile
          </Button>
          <Button variant="outlined" color="error" onClick={handleDelete}>
            Delete Account
          </Button>
        </Box>
      </Paper>

      {/* Edit Modal */}
      <Modal open={openModal} onClose={handleEditClose}>
        <Box
          sx={{
            width: 400,
            p: 4,
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 2,
            mx: "auto",
            mt: "10%",
          }}
        >
          <Typography variant="h6" mb={2}>
            Edit Profile
          </Typography>

          <TextField fullWidth label="Name" name="name" value={formData.name || ""} onChange={handleChange} sx={{ mb: 2 }} />
          <TextField fullWidth label="Email" name="email" value={formData.email || ""} onChange={handleChange} sx={{ mb: 2 }} />
          <TextField fullWidth label="Contact Number" name="contactNumber" value={formData.contactNumber || ""} onChange={handleChange} sx={{ mb: 2 }} />
          <TextField fullWidth label="Department" name="department" value={formData.department || ""} onChange={handleChange} sx={{ mb: 2 }} />
          <TextField fullWidth label="Designation" name="designation" value={formData.designation || ""} onChange={handleChange} sx={{ mb: 2 }} />
          <TextField fullWidth label="Role" name="role" value={formData.role || ""} onChange={handleChange} sx={{ mb: 2 }} />
          <TextField
            fullWidth
            label="Join Date"
            name="joinDate"
            type="date"
            value={formData.joinDate || ""}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            sx={{ mb: 2 }}
          />

          <Box display="flex" justifyContent="space-between" mt={3}>
            <Button onClick={handleEditClose}>Cancel</Button>
            <Button variant="contained" onClick={handleUpdate} sx={{ bgcolor: "#4f46e5" }}>
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default EmployeeProfile;
