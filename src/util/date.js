import { format, register } from 'timeago.js';
// git의 라이브러리 살펴보면 해당 함수가 미리정의되어있음 API문서 참조
import ko_locale from 'timeago.js/lib/lang/ko';

register('ko', ko_locale);
export function localeTime(date, locale = 'ko') {
  return format(date, locale);
}
