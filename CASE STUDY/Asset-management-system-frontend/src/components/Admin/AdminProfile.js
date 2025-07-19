import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Divider,
  Container,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const AdminProfile = () => {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    setAdmin(storedUser);
  }, []);

  if (!admin) return <Typography>Loading profile...</Typography>;

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar sx={{ bgcolor: "#5932EA", width: 64, height: 64 }}>
            <PersonIcon fontSize="large" />
          </Avatar>
          <Box>
            <Typography variant="h5">{admin.name}</Typography>
            <Typography variant="body1" color="text.secondary">
              Admin Panel
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Line-by-line fields */}
        <Box sx={{ lineHeight: 2 }}>
          <Typography><strong>Name</strong>            : {admin.name}</Typography>
          <Typography><strong>ID</strong>              : {admin.id}</Typography>
          <Typography><strong>Email</strong>           : {admin.email}</Typography>
          <Typography><strong>Contact Number</strong>  : {admin.contactNumber}</Typography>
          <Typography><strong>Department</strong>      : {admin.department}</Typography>
          <Typography><strong>Role</strong>            : {admin.role}</Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default AdminProfile;