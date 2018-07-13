'use strict';

goog.require('Blockly.JavaScript');

Blockly.JavaScript['device_forever'] = function(block) {
    // Do while(true) loop.
    var branch = Blockly.JavaScript.statementToCode(block, 'DO');
    branch = Blockly.JavaScript.addLoopTrap(branch, block.id);
    return 'while (true) {\nrunEventsHelper();\n' + branch + '}\n';
};

Blockly.JavaScript['device_pause'] = function(block) {
    // Pause statement.
    var pause = Blockly.JavaScript.valueToCode(block, 'PAUSE', Blockly.JavaScript.ORDER_ASSIGNMENT) || '100';
    return 'pauseHelper(' + pause + ');\n';
};

Blockly.JavaScript['device_random'] = function (block) {
    // Return a random number
    var limit = Blockly.JavaScript.valueToCode(block, 'LIMIT', Blockly.JavaScript.ORDER_ASSIGNMENT) || '4';
    var code = 'Math.floor(Math.random() * ((' + limit + ') + 1))';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['device_get_running_time'] = function (block) {
    // Find how long it has been since the program started
    var code = '(basic.runningTime() | 0)';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['device_set_led_color'] = function (block) {
    // Set LED color
    var led = String(block.getFieldValue('LED'));
    var color = String(block.getFieldValue('COLOR'));
    return 'fezHat.setLedColor(' + led + ', ' + color + ');\n';
};

Blockly.JavaScript['device_turn_led_off'] = function (block) {
    // Set LED color
    var led = String(block.getFieldValue('LED'));
    return 'fezHat.turnLedOff(' + led + ');\n';
};

Blockly.JavaScript['device_get_button_state'] = function (block) {
    // Check whether a button is pressed right now
    var button = String(block.getFieldValue('BUTTON'));
    var code = 'fezHat.getButtonState(' + button + ') > 0';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['device_go_foward'] = function (block) {
    // start motor speed
    var speed = String(block.getFieldValue('SPEED'));
    var code = 'fezHat.goFoward(' + speed + ');\n';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['device_stop'] = function (block) {
    // stop motor speed
    return ['fezHat.stop();\n', Blockly.JavaScript.ORDER_ATOMIC];
};


