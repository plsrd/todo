import events from './eventsBus'
import { domCache, cacheElements, createElement } from './projectFormController';

function initTagController() {
  events.on('createTagsContainer', createTagsContainer);
  events.on('createTag', createTag)
}

function createTagsContainer(target) {
  createElement('div', target, 'tags-container', {'class': 'tags-container'});
  cacheElements(['tags-container']);
  const container = domCache.tagsContainer;
  createElement('label', container, 'tags-label', {'for': 'tag-input'}, 'tags');
  createElement('input', container,'tag-input', {'type': 'text',} )
  createElement('button', container, 'tag-btn', {'type': 'button'}, '+');
  cacheElements(['tag-input', 'tag-btn']);
  events.emit('tagBtnCreated', domCache.tagBtn);
}

function createTag() {
  console.log(domCache.tagInput.value);
}

export default initTagController;