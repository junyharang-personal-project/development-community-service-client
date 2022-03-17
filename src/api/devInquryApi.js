import axios from 'axios';

/**
 * Q&A 게시판 관련 API
 * <pre>
 * <b>History:</b>
 *    주니하랑, 1.0.0, 2022.03.09 최초 작성
 * </pre>
 *
 * @author 주니하랑
 * @version 1.0.0, 2022.03.09 최초 작성
 * @See ""
 * @see <a href=""></a>
 */

/**
 * Q&A 등록 / 수정
 * // TODO - 등록 / 수정 분리 필요
 */

export function devInquryRegist(params) {
    return axios({
        // Back End Route URI
        url: '/api/support/devInqury',
        // HTTP Method
        method: 'post',
        data: params
    });
} // devInquryRegist(params) 끝

/**
 * Q&A 목록 조회
 */

export function devInquryList(params) {
    return axios({
        // Back End Route URI
        url: '/api/support/devInquryList',
        // HTTP Method
        method: 'post',
        data: params
    });
} // devInquryList(params) 끝

/**
 * Q&A 상세 조회
 */

export function devInquryDetail(params) {
    return axios({
        // Back End Route URI
        url: '/api/support/devInquryView',
        // HTTP Method
        method: 'post',
        data: params
    });
} // devInquryDetail(params) 끝

/**
 * Q&A 글 삭제
 */

export function devInquryDelete(params) {
    return axios({
        // Back End Route URI
        url: '/api/support/devInqury',
        // HTTP Method
        method: 'delete',
        data: params
    });
} // devInquryDelete(params) 끝