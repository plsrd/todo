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
  domCache.currentTags = [];
}

class Tag {
  constructor(content){
    this.content = content;
  }

  set project(id) {
    this.parent = id;
  }

  set class(num) {
    this.clasNum = num;
  }

}

function createTag() {
  let newTag = new Tag(domCache.tagInput.value);
  domCache.currentTags.push(newTag);
  displayTags(newTag, domCache.tagsContainer);
}

function displayTags(tag, target) {
  let classNum = `tag-${Math.floor(Math.random() * 11)}`;
  createElement('p', target, 'none', {'class': `${classNum}`, 'prepend': true}, tag.content);
}

export default initTagController;