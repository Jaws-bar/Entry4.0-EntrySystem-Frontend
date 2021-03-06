import {
  MainActionTypes,
  GET_USER_APPLICANT_STATUS,
  GET_USER_APPLICANT_STATUS_FAILURE,
  GET_USER_APPLICANT_STATUS_SUCCESS,
  PATCH_FIANL_SUBMIT,
  PATCH_FIANL_SUBMIT_FAILURE,
  PATCH_FIANL_SUBMIT_SUCCESS
} from "../../actions/main";
import { UserApplicantStatusApiType } from "../../../../lib/api/apiType";

export interface RootState extends UserApplicantStatusApiType {
  isSuccess?: boolean;
  isError?: boolean;
  isWaiting?: boolean;
}

const initialStae: RootState = {
  is_paid: false,
  is_passed_interview: false,
  is_printed_application_arrived: false,
  is_final_submit: false,
  is_passed_final_apply: false,
  receipt_code: 0,
  exam_code: 0
};

const mainReducer = (
  state = initialStae,
  action: MainActionTypes
): RootState => {
  switch (action.type) {
    case GET_USER_APPLICANT_STATUS: {
      return {
        ...state,
        isWaiting: true
      };
    }
    case GET_USER_APPLICANT_STATUS_SUCCESS: {
      const {
        is_paid,
        is_passed_interview,
        is_printed_application_arrived,
        is_final_submit,
        is_passed_final_apply,
        receipt_code,
        exam_code
      } = action.payload;
      return {
        ...state,
        is_paid,
        is_passed_interview,
        is_printed_application_arrived,
        is_final_submit,
        is_passed_final_apply,
        receipt_code,
        exam_code,
        isSuccess: true,
        isError: false,
        isWaiting: false
      };
    }
    case GET_USER_APPLICANT_STATUS_FAILURE: {
      return {
        ...state,
        isError: true,
        isSuccess: false,
        isWaiting: false
      };
    }
    case PATCH_FIANL_SUBMIT: {
      return {
        ...state
      };
    }
    case PATCH_FIANL_SUBMIT_SUCCESS: {
      return {
        ...state,
        is_final_submit: true
      };
    }
    case PATCH_FIANL_SUBMIT_FAILURE: {
      return {
        ...state,
        is_final_submit: false
      };
    }
    default:
      return state;
  }
};

export default mainReducer;
