const express = require("express");
const router = express.Router();
const leaveRequestController = require("../controllers/leaveRequestController");

router.post("/leaveRequests", leaveRequestController.addLeaveRequest);
router.get("/leaveRequests", leaveRequestController.getAllLeaveRequests);
router.get(
  "/leaveRequests/guard/:guard",
  leaveRequestController.getLeaveRequestsByGuard
);
router.put(
  "/leaveRequests/:id",
  leaveRequestController.updateLeaveRequestStatus
);

module.exports = router;
