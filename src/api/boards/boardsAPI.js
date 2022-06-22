import axios from "axios";

import { tokenConfig } from "../tokenConfig";
import { BASE_REQ_URL } from "../urlconfig";
import { createMessage } from "../../common/utils/messagesSlice";
import { returnErrors } from "../../common/utils/errorsSlice";

import { loadingBoards, boardsLoaded, deletedGame } from "./boardsAPISlice";

export const getBoards = () => (dispatch, getState) => {
	dispatch(loadingBoards());
	axios
		.get(BASE_REQ_URL+"api/boards/", tokenConfig(getState))
		.then((res) => {
			dispatch(boardsLoaded(res.data));
			dispatch(
				createMessage({
					type: "Loaded boards",
					n_boards: getState().boardsAPI.boards.length,
					time: Date().toString(),
				})
			);
		})
		.catch((err) => {
			console.log("Can't load boards", err);
			dispatch(
				returnErrors({
					msg: err.response.data,
					status: err.response.status,
				})
			);
		});
};

export const deleteBoard = (gameCode) => (dispatch, getState) => {
	axios
		.delete(
			BASE_REQ_URL+`api/game/${gameCode}/`,
			tokenConfig(getState)
		)
		.then((res) => {
			dispatch(deletedGame(gameCode));
			dispatch(
				createMessage({
					type: "Deleted board",
					boardCode: gameCode,
					time: Date().toString(),
				})
			);
		})
		.catch((err) => {
			console.log(err);
			dispatch(returnErrors(err));
		});
};
