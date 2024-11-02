/**
 * 새 창 여는 유틸 함수
 * noopener : 새로 열린 창이나 탭에서 부모 창으로의 참조를 차단
 * noreferrer : 새로 열린 창이나 탭에서 부모 창의 URL 정보를 전달 X
 * @param url 접속할 url
 */
export const openWindow = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};
