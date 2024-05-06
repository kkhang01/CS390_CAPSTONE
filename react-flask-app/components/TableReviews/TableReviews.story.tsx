import attributes from './attributes.json';
import { StoryWrapper } from '../StoryWrapper/StoryWrapper';
import { TableReviews } from './TableReviews';

export default { title: 'TableReviews' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={TableReviews} />;
}
