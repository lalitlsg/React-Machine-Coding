import { UID } from '../../constant/constant';
import UseCounterComponent from '../custom-hooks/use-counter/UseCounterComponent';
import DocumentTitle from '../custom-hooks/use-document-title/DocumentTitle';
import UseInputComponent from '../custom-hooks/use-input/UseInputComponent';
import FirstRenderComponent from '../custom-hooks/use-is-first-render/FirstRenderComponent';
import LocalStorageComponent from '../custom-hooks/use-local-storage/LocalStorageComponent';
import UseTimeoutComponent from '../custom-hooks/use-timeout/UseTimeoutComponent';
import UseMemoFactorial from '../hooks-impl/use-memo/use-memo-factorial/UseMemoFactorial';
import UseMemoSorting from '../hooks-impl/use-memo/use-memo-sorting/UseMemoSorting';
import ChessBoard from './chess-board/ChessBoard';
import Crud from './crud-operations/components/Crud';
import DayCalender from './day-calender/DayCalender';
import DynamicForm from './dynamic-form/DynamicForm';
import DynamicTable from './dynamic-table/DynamicTable';
import HorizontalScroller from './horizontal-scroller/HorizontalScroller';
import InfiniteScroller from './infinite-scroller/InfiniteScroller';
import Pagination from './pagination/Pagination';
import ProgressBar from './progress-bar/ProgressBar';
import SearchBar from './search-bar/SearchBar';
import StarRating from './star-rating/StarRating';

export const problemComponents = {
  [UID.STAR_RATING]: <StarRating />,
  [UID.CHESS_BOARD]: <ChessBoard />,
  [UID.PROGRESS_BAR]: <ProgressBar />,
  [UID.DAY_CALENDER]: <DayCalender />,
  [UID.DOCUMENT_TITLE]: <DocumentTitle />,
  [UID.USE_COUNTER]: <UseCounterComponent />,
  [UID.USE_INPUT]: <UseInputComponent />,
  [UID.CRUD_OPERATION]: <Crud />,
  [UID.DYNAMIC_FORM]: <DynamicForm />,
  [UID.PAGINATION]: <Pagination />,
  [UID.HORIZONTAL_SCROLLER]: <HorizontalScroller />,
  [UID.USE_LOCAL_STORAGE]: <LocalStorageComponent />,
  [UID.INFINITE_SCROLLER]: <InfiniteScroller />,
  [UID.USE_TIMEOUT]: <UseTimeoutComponent />,
  [UID.USE_IS_FIRST_RENDER]: <FirstRenderComponent />,
  [UID.SEARCH_BAR]: <SearchBar />,
  [UID.DYNAMIC_TABLE]: <DynamicTable />,
  [UID.USE_MEMO_FACTORIAL]: <UseMemoFactorial />,
  [UID.USE_MEMO_SORTING]: <UseMemoSorting />,
};
