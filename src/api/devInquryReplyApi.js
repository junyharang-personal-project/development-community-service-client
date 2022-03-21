import axios from "axios";

/**
 * Q&A 게시판 답글 관련 API
 * <pre>
 * <b>History:</b>
 *    주니하랑, 1.0.0, 2022.03.21 최초 작성
 * </pre>
 *
 * @author 주니하랑
 * @version 1.0.0, 2022.03.21 최초 작성
 * @See ""
 * @see <a href=""></a>
 */

/**
 * Q&A 답글 등록
 * // TODO - 등록 / 수정 분리 필요
 */

export function devInquryReplyRegist(params) {
    console.log("devInquryReplyApi의 devInquryReplyRegist(params)가 동작하였습니다! 답글 등록을 위해 BackEnd에 요청을 보냅니다!");

    return axios({
        // Back End Route URI
        url: '/api/support/dev-inqury/reply',
        // HTTP Method
        method: 'post',
        data: params
    });
} // devInquryReplyRegist(params) 끝

/**
 * Q&A 답글 삭제
 */

export function devInquryReplyDelete(params) {
    console.log("devInquryReplyApi의 devInquryReplyDelete(params)가 동작하였습니다! 답글 삭제를 위해 BackEnd에 요청을 보냅니다!");

    return axios({
        // Back End Rout URI
        url: '/api/support/dev-inqury/reply/'+params,
        // HTTP Method
        method: 'delete',
    });
}