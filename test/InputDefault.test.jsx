import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { InputDefault, MIRROR_STYLES } from '../src/implementation/InputDefault.jsx';
import { aKeyCode } from '../src/keyCodes';

import { noop } from './util';
import { emptyString, nonEmptyString } from './mock';

describe.only('<InputDefault />', () => {
  let inputWrapper;
  let handleOnChange;
  let handleOnBlur;
  let handleOnKeyDown;
  let mirrorInputStyle;
  let updateInputWidth;
  let isEditing;
  let handleEdit;

  context('when component mounts', () => {
    /*
    it('should copy the font styling from the input to the mirror element', () => {
      const inputStyles = window.getComputedStyle(inputWrapper.find('#inputNode').node);
      const mirrorStyles = inputWrapper.find('#mirrorNode').node.style;
      MIRROR_STYLES.forEach((mStyle) => {
        expect(mirrorStyles[mStyle]).to.equal(inputStyles[mStyle]);
      });
    })
    */;

    // Note: jsdom does not implement browser box model so we can * not * test the following
    it('should set the input width with the mirror width');
    // const inputWidth = wrapper.find('#inputNode').node.style.width;
    // const mirrorWidth = wrapper.find('#mirrorNode').node.style.width;
    // expect(inputWidth).to.equal(mirrorWidth);
  });

  context('when component updates', () => {

    // Note: jsdom does not implement browser box model so we can * not * test the following
    it('should update the input width with the mirror width');
    // wrapper.find('input').simulate('change', { target: { value: 'a' }})
    // const inputWidth = wrapper.find('#inputNode').node.style.width;
    // const mirrorWidth = wrapper.find('#mirrorNode').node.style.width;
    // expect(inputWidth).to.equal(mirrorWidth);
  });

  describe('handling input', () => {
    beforeEach(() => {
      handleOnChange = sinon.stub();
      handleOnBlur = sinon.stub();
      handleOnKeyDown = sinon.stub();

      inputWrapper = mount(
        <InputDefault
          value={emptyString}
          handleOnChange={handleOnChange}
          handleOnBlur={handleOnBlur}
          handleOnKeyDown={handleOnKeyDown}
        />
      )
    });

    context('when input value changes', () => {
      beforeEach(() => {
        inputWrapper.find('input').simulate('change', { target: { value: nonEmptyString }});
      });

      it('should handle the change', () => {
        expect(handleOnChange).to.have.been.called();
      });
    });

    context('when focus leaves input value', () => {
      beforeEach(() => {
        inputWrapper.find('input').simulate('blur');
      });

      it('should handle the blur', () => {
        expect(handleOnBlur).to.have.been.called();
      });
    });

    context('when input is typed in', () => {
      beforeEach(() => {
        inputWrapper.find('input').simulate('keydown', { keyCode: aKeyCode });
      });

      it('should handle the keydown', () => {
        expect(handleOnKeyDown).to.have.been.called();
      });
    });
  });

  context('when component mounts', () => {
    beforeEach(() => {
      mirrorInputStyle = sinon.stub();
      updateInputWidth = sinon.stub();

      inputWrapper = mount(
        <InputDefault
          value={emptyString}
          handleOnChange={noop}
          handleOnBlur={noop}
          handleOnKeyDown={noop}
          mirrorInputStyle={mirrorInputStyle}
          updateInputWidth={updateInputWidth}
        />
      )
    });

    it('should mirror the input style', () => {
      expect(mirrorInputStyle).to.have.been.called();
    });

    it('should update the input width', () => {
      expect(updateInputWidth).to.have.been.called();
    });
  });

  context('when component updates', () => {
    beforeEach(() => {
      updateInputWidth = sinon.stub();

      inputWrapper = mount(
        <InputDefault
          value={emptyString}
          handleOnChange={noop}
          handleOnBlur={noop}
          handleOnKeyDown={noop}
          updateInputWidth={updateInputWidth}
        />
      )
    });

    context('when component updates', () => {
      beforeEach(() => {
        inputWrapper.setProps({ value: nonEmptyString });
      });

      it('should update the input width', () => {
        expect(updateInputWidth).to.have.been.called();
      });
    });
  });

  context('when isEditing is false', () => {
    beforeEach(() => {
      isEditing = false;
      handleEdit = sinon.stub();

      inputWrapper = mount(
        <InputDefault
          value={emptyString}
          handleOnChange={noop}
          handleOnBlur={noop}
          handleOnKeyDown={noop}
          isEditing={isEditing}
          handleEdit={handleEdit}
        />
      )
    });

    context('when isEditing changes from false to true', () => {
      beforeEach(() => {
        inputWrapper.setProps({ isEditing: true });
      });

      it('should handle the edit', () => {
        expect(handleEdit).to.have.been.called();
      });
    });
  });
});
