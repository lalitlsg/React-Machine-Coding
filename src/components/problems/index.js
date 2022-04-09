import { UID } from "../../constant/constant";
import UseCounterComponent from "../custom-hooks/use-counter/UseCounterComponent";
import DocumentTitle from "../custom-hooks/use-document-title/DocumentTitle";
import UseInputComponent from "../custom-hooks/use-input/UseInputComponent";
import ChessBoard from "./chess-board/ChessBoard";
import DayCalender from "./day-calender/DayCalender";
import ProgressBar from "./progress-bar/ProgressBar";
import StarRating from "./star-rating/StarRating";

export const problemComponents = {
    [UID.STAR_RATING]: <StarRating />,
    [UID.CHESS_BOARD]: <ChessBoard />,
    [UID.PROGRESS_BAR]: <ProgressBar />,
    [UID.DAY_CALENDER]: <DayCalender />,
    [UID.DOCUMENT_TITLE]: <DocumentTitle />,
    [UID.USE_COUNTER] : <UseCounterComponent />,
    [UID.USE_INPUT] : <UseInputComponent />
  };