import mongoose from "mongoose";

const connecctionRequest = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	ConnectionId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	status_accepted: {
		type: Boolean,
		default: null,
	},
});

const ConnectionRequest = mongoose.model(
	"ConnectionRequest",
	connecctionRequest,
);

export default ConnectionRequest;
