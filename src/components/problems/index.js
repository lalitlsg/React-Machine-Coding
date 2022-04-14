import { UID } from "../../constant/constant";
import UseCounterComponent from "../custom-hooks/use-counter/UseCounterComponent";
import DocumentTitle from "../custom-hooks/use-document-title/DocumentTitle";
import UseInputComponent from "../custom-hooks/use-input/UseInputComponent";
import ChessBoard from "./chess-board/ChessBoard";
import Crud from "./crud-operations/components/Crud";
import DayCalender from "./day-calender/DayCalender";
import DynamicForm from "./dynamic-form/DynamicForm";
import HorizontalScroller from "./horizontal-scroller/HorizontalScroller";
import Pagination from "./pagination/Pagination";
import ProgressBar from "./progress-bar/ProgressBar";
import StarRating from "./star-rating/StarRating";

export const problemComponents = {
    [UID.STAR_RATING]: <StarRating />,
    [UID.CHESS_BOARD]: <ChessBoard />,
    [UID.PROGRESS_BAR]: <ProgressBar />,
    [UID.DAY_CALENDER]: <DayCalender />,
    [UID.DOCUMENT_TITLE]: <DocumentTitle />,
    [UID.USE_COUNTER] : <UseCounterComponent />,
    [UID.USE_INPUT] : <UseInputComponent />,
    [UID.CRUD_OPERATION]: <Crud />,
    [UID.DYNAMIC_FORM]: <DynamicForm />,
    [UID.PAGINATION]: <Pagination />,
    [UID.HORIZONTAL_SCROLLER]: <HorizontalScroller />
  };
