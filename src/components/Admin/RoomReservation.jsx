import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { toast } from "sonner";
import { Calendar, Clock, Check, X, AlertCircle } from "lucide-react";

const mockReservations = [
  {
    id: "R001",
    teacherName: "Juan Dela Cruz",
    room: "Science Lab 1",
    date: "2025-06-10",
    timeStart: "09:00",
    timeEnd: "10:30",
    purpose: "Chemistry experiment",
    status: "pending",
    requestDate: "2025-06-01",
  },
  {
    id: "R002",
    teacherName: "Maria Santos",
    room: "Computer Lab",
    date: "2025-06-12",
    timeStart: "13:00",
    timeEnd: "15:00",
    purpose: "Programming class",
    status: "approved",
    requestDate: "2025-06-02",
  },
  {
    id: "R003",
    teacherName: "Robert Chen",
    room: "Auditorium",
    date: "2025-06-20",
    timeStart: "08:00",
    timeEnd: "11:00",
    purpose: "General assembly",
    status: "rejected",
    requestDate: "2025-06-03",
  },
];

const availableRooms = [
  "Science Lab 1",
  "Science Lab 2",
  "Computer Lab",
  "Audio Visual Room",
  "Auditorium",
  "Library",
  "Gymnasium",
  "Music Room",
  "Art Room",
  "Conference Room",
];

export function RoomReservation() {
  const [activeTab, setActiveTab] = useState("requests");
  const [reservations, setReservations] = useState(mockReservations);
  const [filterStatus, setFilterStatus] = useState("all");

  const [newReservation, setNewReservation] = useState({
    teacherName: "",
    room: "",
    date: "",
    timeStart: "",
    timeEnd: "",
    purpose: "",
  });

  const handleApprove = (id) => {
    setReservations((prev) =>
      prev.map((res) => (res.id === id ? { ...res, status: "approved" } : res))
    );
    toast.success("Room reservation approved!");
  };

  const handleReject = (id) => {
    setReservations((prev) =>
      prev.map((res) => (res.id === id ? { ...res, status: "rejected" } : res))
    );
    toast.success("Room reservation rejected!");
  };

  const handleCreateReservation = (e) => {
    e.preventDefault();

    const { teacherName, room, date, timeStart, timeEnd, purpose } = newReservation;
    if (!teacherName || !room || !date || !timeStart || !timeEnd || !purpose) {
      toast.error("Please fill in all fields");
      return;
    }

    const newRes = {
      id: `R${String(reservations.length + 1).padStart(3, "0")}`,
      ...newReservation,
      status: "pending",
      requestDate: new Date().toISOString().split("T")[0],
    };

    setReservations((prev) => [newRes, ...prev]);
    toast.success("Room reservation created successfully!");

    setNewReservation({
      teacherName: "",
      room: "",
      date: "",
      timeStart: "",
      timeEnd: "",
      purpose: "",
    });
    setActiveTab("requests");
  };

  const filteredReservations = reservations.filter((res) =>
    filterStatus === "all" ? true : res.status === filterStatus
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="absolute backdrop-blur-[17.5px] backdrop-filter bg-[rgba(255,255,255,0.41)] h-[calc(100%-138px)] left-[420px] rounded-[31px] top-[69px] w-[calc(100%-470px)]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.32)] border-solid inset-0 pointer-events-none rounded-[31px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.35)]" />

      <div className="absolute bg-[#fefefe] h-[75px] left-0 rounded-t-[31px] top-0 right-0">
        <div aria-hidden="true" className="absolute border-[#adadad] border-[3px] border-solid inset-0 pointer-events-none rounded-t-[31px]" />
        <p className="absolute left-[42px] text-black text-nowrap top-[26px] whitespace-pre">
          ROOM RESERVATION MANAGEMENT
        </p>
      </div>

      <div className="absolute left-[42px] right-[42px] top-[100px] bottom-[42px] overflow-auto">
        <div className="mb-6 flex gap-4">
          <Button
            onClick={() => setActiveTab("requests")}
            className={`px-6 rounded-[12px] ${
              activeTab === "requests"
                ? "bg-[#ebeaea] text-black border-[#5c5c5c]"
                : "bg-white text-black border-[#5c5c5c]"
            }`}
          >
            Reservation Requests
          </Button>
          <Button
            onClick={() => setActiveTab("create")}
            className={`px-6 rounded-[12px] ${
              activeTab === "create"
                ? "bg-[#ebeaea] text-black border-[#5c5c5c]"
                : "bg-white text-black border-[#5c5c5c]"
            }`}
          >
            Create Reservation
          </Button>
        </div>

        {activeTab === "requests" && (
          <div className="bg-white rounded-[14px] p-8 border border-[#5c5c5c] shadow-[0px_4px_4px_0px_#1e1e1e]">
            <div className="flex justify-between items-center mb-6">
              <h3>Reservation Requests</h3>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="h-10 px-4 bg-[#f0f0f0] border border-[#5c5c5c] rounded-[10px]"
              >
                <option value="all">All Reservations</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>

            <div className="bg-[#d9d9d9] h-[50px] flex items-center px-4">
              <div className="w-24">Request ID</div>
              <div className="w-48">Teacher</div>
              <div className="flex-1">Room</div>
              <div className="w-32">Date</div>
              <div className="w-40">Time</div>
              <div className="flex-1">Purpose</div>
              <div className="w-32 text-center">Status</div>
              <div className="w-40 text-center">Actions</div>
            </div>

            <div className="space-y-0">
              {filteredReservations.map((reservation) => (
                <div
                  key={reservation.id}
                  className="h-[80px] flex items-center px-4 border border-black bg-white"
                >
                  <div className="w-24">{reservation.id}</div>
                  <div className="w-48">{reservation.teacherName}</div>
                  <div className="flex-1">{reservation.room}</div>
                  <div className="w-32">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span>{new Date(reservation.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="w-40">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span>
                        {reservation.timeStart} - {reservation.timeEnd}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 pr-4">
                    <p className="truncate">{reservation.purpose}</p>
                  </div>
                  <div className="w-32 flex justify-center">
                    <span
                      className={`px-3 py-1 rounded-full capitalize ${getStatusColor(
                        reservation.status
                      )}`}
                    >
                      {reservation.status}
                    </span>
                  </div>
                  <div className="w-40 flex justify-center gap-2">
                    {reservation.status === "pending" ? (
                      <>
                        <button
                          onClick={() => handleApprove(reservation.id)}
                          className="p-2 rounded-lg transition-colors"
                          title="Approve"
                        >
                          <Check className="w-5 h-5 text-green-600" />
                        </button>
                        <button
                          onClick={() => handleReject(reservation.id)}
                          className="p-2 rounded-lg transition-colors"
                          title="Reject"
                        >
                          <X className="w-5 h-5 text-red-600" />
                        </button>
                      </>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {filteredReservations.length === 0 && (
              <div className="py-12 text-center text-gray-400">
                <AlertCircle className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>No reservations found</p>
              </div>
            )}
          </div>
        )}

        {activeTab === "create" && (
          <div className="bg-white rounded-[14px] p-8 border border-[#5c5c5c] shadow-[0px_4px_4px_0px_#1e1e1e] max-w-4xl">
            <h3 className="mb-6">Create New Room Reservation</h3>

            <form onSubmit={handleCreateReservation} className="space-y-6">
              <div className="bg-[#f9f9f9] rounded-lg p-6 border border-gray-200">
                <h4 className="mb-4">Reservation Details</h4>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="teacherName">Teacher Name</Label>
                    <Input
                      id="teacherName"
                      value={newReservation.teacherName}
                      onChange={(e) =>
                        setNewReservation({ ...newReservation, teacherName: e.target.value })
                      }
                      placeholder="Enter teacher name"
                      required
                      className="mt-2 bg-[#f0f0f0] border-[#5c5c5c] rounded-[10px]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="room">Room</Label>
                    <select
                      id="room"
                      value={newReservation.room}
                      onChange={(e) =>
                        setNewReservation({ ...newReservation, room: e.target.value })
                      }
                      required
                      className="mt-2 w-full h-10 px-3 bg-[#f0f0f0] border border-[#5c5c5c] rounded-[10px]"
                    >
                      <option value="">Select Room</option>
                      {availableRooms.map((room) => (
                        <option key={room} value={room}>
                          {room}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 mt-6">
                  <div>
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={newReservation.date}
                      onChange={(e) =>
                        setNewReservation({ ...newReservation, date: e.target.value })
                      }
                      required
                      className="mt-2 bg-[#f0f0f0] border-[#5c5c5c] rounded-[10px]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="timeStart">Start Time</Label>
                    <Input
                      id="timeStart"
                      type="time"
                      value={newReservation.timeStart}
                      onChange={(e) =>
                        setNewReservation({ ...newReservation, timeStart: e.target.value })
                      }
                      required
                      className="mt-2 bg-[#f0f0f0] border-[#5c5c5c] rounded-[10px]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="timeEnd">End Time</Label>
                    <Input
                      id="timeEnd"
                      type="time"
                      value={newReservation.timeEnd}
                      onChange={(e) =>
                        setNewReservation({ ...newReservation, timeEnd: e.target.value })
                      }
                      required
                      className="mt-2 bg-[#f0f0f0] border-[#5c5c5c] rounded-[10px]"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <Label htmlFor="purpose">Purpose</Label>
                  <Input
                    id="purpose"
                    value={newReservation.purpose}
                    onChange={(e) =>
                      setNewReservation({ ...newReservation, purpose: e.target.value })
                    }
                    placeholder="Enter purpose"
                    required
                    className="mt-2 bg-[#f0f0f0] border-[#5c5c5c] rounded-[10px]"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-[#ebeaea] text-black border-[#5c5c5c] rounded-[12px] px-8 hover:bg-[#d9d9d9]"
                >
                  Create Reservation
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
