import events from './eventsBus'
import { domCache, cacheElements, createElement } from './projectFormController';

function initTagController() {
  events.on('createTagsContainer', createTagsContainer);
}

function createTagsContainer(target) {
  createElement('div', target, 'tags-container', {'class': 'tags-container'});
  cacheElements(['tags-container']);
  const container = domCache.tagsContainer;
  createElement('label', container, 'tags-label', {'for': 'tag-input'}, 'tags');
  createElement('input', container,'tag-input', {'type': 'text',} )
  createElement('button', container, 'tag-btn', {'type': 'button'}, '+');
}

export default initTagController;