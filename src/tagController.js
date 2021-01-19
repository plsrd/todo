import events from './eventsBus'
import { domCache, cacheElements, createElement } from './projectFormController';

function initTagController() {
  events.on('createTagsContainer', createTagsContainer);
  events.on('createTag', createTag);
  events.on('showTagView', showTagView);
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
  domCache.currentTags = [];
}

class Tag {
  constructor(content){
    this.content = content;
  }
  set class(num) {
    this.classNum = num;
  }
}

function createTag() {
  let newTag = new Tag(domCache.tagInput.value);
  domCache.currentTags.push(newTag);
  displayTags(newTag, domCache.tagsContainer);
  domCache.tagInput.value = '';
}

function displayTags(tag, target) {
  tag.class = `tag-${Math.floor(Math.random() * 11)}`;
  createElement('p', target, 'none', {'class': tag.class, 'prepend': true}, tag.content);
}

function showTagView(tag) {
  console.log('tag view');
}

export default initTagController;