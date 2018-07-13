'use strict';

goog.provide('Blockly.Blocks.device');

goog.require('Blockly.Blocks');

var blockColors = {
    basic: 190,
    led: 300,
    input: 3,
    loops: 120,
    pins: 351,
    music: 52,
    game: 176,
    comments: 156,
    images: 45
};

var buttonDropDown = [
    ["dio18", "LittleTrainingRobotHardwareIO.Buttons.dio18"],
    ["dio22", "LittleTrainingRobotHardwareIO.Buttons.dio22"]
];

var rgbLedsDropDown = [
    ["d2", "LittleTrainingRobotHardwareIO.RgbLeds.d2"],
    ["d3", "LittleTrainingRobotHardwareIO.RgbLeds.d3"]
];

var rgbLedColorDropdown = [
    ["black", "LittleTrainingRobotHardwareIO.LedColors.black"],
    ["blue", "LittleTrainingRobotHardwareIO.LedColors.blue"],
    ["cyan", "LittleTrainingRobotHardwareIO.LedColors.cyan"],
    ["green", "LittleTrainingRobotHardwareIO.LedColors.green"],
    ["magneta", "LittleTrainingRobotHardwareIO.LedColors.magneta"],
    ["red", "LittleTrainingRobotHardwareIO.LedColors.red"],
    ["white", "LittleTrainingRobotHardwareIO.LedColors.white"],
    ["yellow", "LittleTrainingRobotHardwareIO.LedColors.yellow"]
];

Blockly.Blocks['device_pause'] = {
  init: function() {
    this.setHelpUrl('https://www.microbit.co.uk/functions/pause');
    this.setColour(blockColors.basic);
    this.appendDummyInput()
        .appendField("pause (ms)");
    this.appendValueInput("PAUSE")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Stop execution for the given delay, hence allowing other threads of execution to run.');
  }
};

Blockly.Blocks['device_forever'] = {
  init: function() {
    this.setHelpUrl('https://www.microbit.co.uk/functions/forever');
    this.setColour(blockColors.basic);
    this.appendDummyInput()
        .appendField("forever");
    this.appendStatementInput("DO")
        .setCheck("null");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setTooltip('Run a sequence of operations repeatedly, in the background.');
  }
};

Blockly.Blocks['device_random'] = {
    init: function () {
        this.setHelpUrl('https://www.microbit.co.uk/blocks/contents');
        this.setColour(230);
        this.appendDummyInput()
            .appendField("pick random 0 to ");
        this.appendValueInput("LIMIT")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setTooltip('Returns a random integer between 0 and the specified bound (inclusive).');
    }
};

Blockly.Blocks['device_get_running_time'] = {
    init: function () {
        this.setColour(blockColors.input);
        this.appendDummyInput()
            .appendField("running time (ms)");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setTooltip('Find how long it has been since the program started.');
    }
};

//FEZHAT
Blockly.Blocks['device_set_led_color'] = {
    init: function () {
        // TODO (lucas): link below is not right
        this.setHelpUrl('https://www.microbit.co.uk/functions/digital-write-pin');
        this.setColour(blockColors.pins);
        this.appendDummyInput()
            .appendField("set led ");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(rgbLedsDropDown), "LED");
        this.appendDummyInput()
            .appendField(" to color ");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(rgbLedColorDropdown), "COLOR");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Turn a Led with the Color specified.');
    }
};

//FEZHAT
Blockly.Blocks['device_turn_led_off'] = {
    init: function () {
        // TODO (lucas): link below is not right
        this.setHelpUrl('https://www.microbit.co.uk/functions/digital-write-pin');
        this.setColour(blockColors.pins);
        this.appendDummyInput()
            .appendField("turn led ");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(rgbLedsDropDown), "LED");
        this.appendDummyInput()
            .appendField(" off");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Turn the selected Led off.');
    }
};


//FEZHAT
Blockly.Blocks['device_get_button_state'] = {
    init: function () {
        this.setColour(blockColors.input);
        this.appendDummyInput()
            .appendField("button");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(buttonDropDown), "BUTTON");
        this.appendDummyInput()
            .appendField("is pressed");
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setTooltip('Check whether a button button is pressed right now.');
    }
};

//FEZHAT
Blockly.Blocks['device_go_forward'] = {
    init: function () {
        this.setHelpUrl('https://www.microbit.co.uk/functions/pause');
        this.setColour(blockColors.basic);
        this.appendDummyInput()
            .appendField("Go Foward at ");
        this.appendValueInput("SPEED")
            .setCheck("Number");
        this.appendDummyInput()
            .appendField(" % ");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Go foward with the motor.');
    }
};
