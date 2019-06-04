# calcite-action

text: string;
label: string;
group?: string;
active?: boolean;
indicator?: boolean;

// todo: not needed anymore
disabled?: boolean; // will inherit button so not needed
image?: string; // just have a slot for image or icon
visible?: boolean;// dont need: use native hidden

actionCallback?: (props: ActionProps) => void;
keyupCallback?: (props: ActionProps) => void;
keydownCallback?: (props: ActionProps) => void;

# props

text: string;
label: string;
group?: string;
active?: boolean;
indicator?: boolean;

# slots

action-icon (svg or img)

# todo

- tests
- verify aria
