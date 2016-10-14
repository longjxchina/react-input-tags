# react-tagging
React component for tagging inputs.

## TODO:
### Basic
- [X] insert a tag on keydown (enter, tab, comma) or onblur, clear the input
- [X] delete a tag on keydown (backspace / delete) or onclick of button
- [X] input placeholder
- [X] input autosize while typing
- [ ] tests
- [ ] make entire tagsinput container clickable, how does i-like-robots do it?

### Suggestions
- [X] display list of suggestions onInputChange
  - [ ] container? tagsinput component? tagsinput seems like it should be separated from suggestions
- [X] select suggestion, insert as tag
- [ ] navigate through list of suggestions using keyboard arrows
  - [ ] up and down to move through list
  - [ ] enter to add a suggestion as a tag

### Advanced
- [ ] edit tag by clicking
- [ ] reorder tags by dragging
- [ ] drag tag from one component to another (onDrag?)
- [ ] validate tags
- [ ] tests

### Dev
- [ ] watchify, browserify hot module reload, dev server
- [ ] continuous integration with tests with Jenkins
- [ ] demo website using github pages
