<?php
return function ($bh) {
 $bh->match('select__input', function ($ctx, $json){
    $select = $ctx->tParam('select');
    $mods = $select->mods;
    $checkedOptions = $ctx->tParam('checkedOptions');
     return     [
                    'block' => 'input',
                    'mix' => [ 'block' => $json->block, 'elem' => 'input' ],
                    'id' => $select->id,
                    'placeholder' => $select->placeholder,
                    'autocomplete' => false,
                    'mods' => [
                        'size' => $mods->size,
                        'theme' => $mods->theme,
                        'style' => 'material',
                        'type' => 'text',
                        'focused' => $mods->focused,
                        'disabled' => $mods->disabled,
                        'has-clear' => true
                    ],
                    'tabIndex' => $select->tabIndex,
                    'val' => !empty($checkedOptions[0])? $checkedOptions[0]['text'] : null,
                ];
 });
};
