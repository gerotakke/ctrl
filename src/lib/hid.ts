// SPDX-License-Identifier: GPL-2.0-only
// Copyright (C) 2023, Input Labs Oy.

// Definitions ported from:
// https://github.com/inputlabs/alpakka_firmware/blob/main/src/headers/hid.h

export const MODIFIER_INDEX = 154
export const MOUSE_INDEX = 162
export const GAMEPAD_INDEX = 174
export const GAMEPAD_AXIS_INDEX = 190
export const PROC_INDEX = 202

export const MODIFIER_INDEX_END =  MOUSE_INDEX - 1
export const MOUSE_INDEX_END =  GAMEPAD_INDEX - 1
export const GAMEPAD_INDEX_END =  GAMEPAD_AXIS_INDEX - 1
export const GAMEPAD_AXIS_INDEX_END =  PROC_INDEX - 1
export const PROC_INDEX_END = 255

export enum HID {
  KEY_NONE = 0,

  KEY_A = 4,
  KEY_B,
  KEY_C,
  KEY_D,
  KEY_E,
  KEY_F,
  KEY_G,
  KEY_H,
  KEY_I,
  KEY_J,
  KEY_K,
  KEY_L,
  KEY_M,
  KEY_N,
  KEY_O,
  KEY_P,
  KEY_Q,
  KEY_R,
  KEY_S,
  KEY_T,
  KEY_U,
  KEY_V,
  KEY_W,
  KEY_X,
  KEY_Y,
  KEY_Z,

  KEY_1,
  KEY_2,
  KEY_3,
  KEY_4,
  KEY_5,
  KEY_6,
  KEY_7,
  KEY_8,
  KEY_9,
  KEY_0,

  KEY_ENTER,
  KEY_ESCAPE,
  KEY_BACKSPACE,
  KEY_TAB,
  KEY_SPACE,
  KEY_MINUS,
  KEY_EQUALS,
  KEY_BRACKET_LEFT,
  KEY_BRACKET_RIGHT,
  KEY_BACKSLASH,
  KEY_SEMICOLON = 51,
  KEY_QUOTE,
  KEY_BACKQUOTE,
  KEY_COMMA,
  KEY_PERIOD,
  KEY_SLASH,
  KEY_CAPS_LOCK,

  KEY_ISO_1 = 50,
  KEY_ISO_2 = 100,

  KEY_F1 = 58,
  KEY_F2,
  KEY_F3,
  KEY_F4,
  KEY_F5,
  KEY_F6,
  KEY_F7,
  KEY_F8,
  KEY_F9,
  KEY_F10,
  KEY_F11,
  KEY_F12,

  KEY_PRINT_SCREEN,
  KEY_SCROLL_LOCK,
  KEY_PAUSE,
  KEY_INSERT,
  KEY_HOME,
  KEY_PAGE_UP,
  KEY_DELETE,
  KEY_END,
  KEY_PAGE_DOWN,

  KEY_RIGHT,
  KEY_LEFT,
  KEY_DOWN,
  KEY_UP,

  KEY_PAD_NUMLOCK = 83,
  KEY_PAD_SLASH ,
  KEY_PAD_ASTERISK ,
  KEY_PAD_MINUS ,
  KEY_PAD_PLUS ,
  KEY_PAD_ENTER ,
  KEY_PAD_1 ,
  KEY_PAD_2 ,
  KEY_PAD_3 ,
  KEY_PAD_4 ,
  KEY_PAD_5 ,
  KEY_PAD_6 ,
  KEY_PAD_7 ,
  KEY_PAD_8 ,
  KEY_PAD_9 ,
  KEY_PAD_0 ,
  KEY_PAD_PERIOD,

  KEY_POWER = 102,

  KEY_F13 = 104,
  KEY_F14,
  KEY_F15,
  KEY_F16,
  KEY_F17,
  KEY_F18,
  KEY_F19,
  KEY_F20,
  KEY_F21,
  KEY_F22,
  KEY_F23,
  KEY_F24,

  KEY_MUTE = 127,
  KEY_VOLUME_UP,
  KEY_VOLUME_DOWN,

  KEY_KANJI_1 = 135,
  KEY_KANJI_2,
  KEY_KANJI_3,
  KEY_KANJI_4,
  KEY_KANJI_5,
  KEY_KANJI_6,
  KEY_KANJI_7,
  KEY_KANJI_8,
  KEY_KANJI_9,
  KEY_LANG_1,
  KEY_LANG_2,
  KEY_LANG_3,
  KEY_LANG_4,
  KEY_LANG_5,
  KEY_LANG_6,
  KEY_LANG_7,
  KEY_LANG_8,
  KEY_LANG_9,

  KEY_CONTROL_LEFT = MODIFIER_INDEX,
  KEY_SHIFT_LEFT,
  KEY_ALT_LEFT,
  KEY_SUPER_LEFT,
  KEY_CONTROL_RIGHT,
  KEY_SHIFT_RIGHT,
  KEY_ALT_RIGHT,
  KEY_SUPER_RIGHT,

  MOUSE_1 = MOUSE_INDEX,
  MOUSE_2,
  MOUSE_3,
  MOUSE_4,
  MOUSE_5,
  MOUSE_SCROLL_UP,
  MOUSE_SCROLL_DOWN,
  MOUSE_X,
  MOUSE_Y,
  MOUSE_X_NEG,
  MOUSE_Y_NEG,

  GAMEPAD_UP = GAMEPAD_INDEX,
  GAMEPAD_DOWN,
  GAMEPAD_LEFT,
  GAMEPAD_RIGHT,
  GAMEPAD_START,
  GAMEPAD_SELECT,
  GAMEPAD_L3,
  GAMEPAD_R3,
  GAMEPAD_L1,
  GAMEPAD_R1,
  GAMEPAD_HOME,
  GAMEPAD_PADDING,
  GAMEPAD_A,
  GAMEPAD_B,
  GAMEPAD_X,
  GAMEPAD_Y,

  GAMEPAD_AXIS_LX = GAMEPAD_AXIS_INDEX,
  GAMEPAD_AXIS_LY,
  GAMEPAD_AXIS_LZ,
  GAMEPAD_AXIS_RX,
  GAMEPAD_AXIS_RY,
  GAMEPAD_AXIS_RZ,
  GAMEPAD_AXIS_LX_NEG,
  GAMEPAD_AXIS_LY_NEG,
  GAMEPAD_AXIS_LZ_NEG,
  GAMEPAD_AXIS_RX_NEG,
  GAMEPAD_AXIS_RY_NEG,
  GAMEPAD_AXIS_RZ_NEG,

  PROC_PROFILE_0 = PROC_INDEX,
  PROC_PROFILE_1,
  PROC_PROFILE_2,
  PROC_PROFILE_3,
  PROC_PROFILE_4,
  PROC_PROFILE_5,
  PROC_PROFILE_6,
  PROC_PROFILE_7,
  PROC_PROFILE_8,
  PROC_PROFILE_9,
  PROC_PROFILE_10,
  PROC_PROFILE_11,
  PROC_PROFILE_12,

  PROC_TUNE_UP,
  PROC_TUNE_DOWN,
  PROC_TUNE_OS,
  PROC_TUNE_MOUSE_SENS,
  PROC_TUNE_TOUCH_SENS,
  PROC_TUNE_DEADZONE,
  PROC_CALIBRATE,
  PROC_RESTART,
  PROC_BOOTSEL,
  PROC_RESET_FACTORY,
  PROC_RESET_CONFIG,
  PROC_RESET_PROFILES,
  PROC_THANKS,
  PROC_HOME_GAMEPAD,

  PROC_MACRO_1,
  PROC_MACRO_2,
  PROC_MACRO_3,
  PROC_MACRO_4,
  PROC_MACRO_5,
  PROC_MACRO_6,
  PROC_MACRO_7,
  PROC_MACRO_8,

  PROC_ROTARY_MODE_0,
  PROC_ROTARY_MODE_1,
  PROC_ROTARY_MODE_2,
  PROC_ROTARY_MODE_3,
  PROC_ROTARY_MODE_4,
  PROC_ROTARY_MODE_5,
}

export function isAxis(action: HID) {
  if (action >= HID.MOUSE_X && action <= HID.MOUSE_Y_NEG) return true
  if (action >= HID.GAMEPAD_AXIS_LX && action <= HID.GAMEPAD_AXIS_RZ_NEG) return true
  return false
}
