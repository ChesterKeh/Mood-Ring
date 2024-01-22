import { useState } from "react";
import { Dropdown, useDropdownToggle, useDropdownMenu } from "react-overlays";

export default function CreateButton(){
    const [show, setShow] = useState(false);

    const Menu = ({ role }) => {
        const [props, { toggle, show }] = useDropdownMenu({
          flip: true,
          offset: [0, 8],
        });
        const display = show ? "flex" : "none";
        return (
          <div
            {...props}
            role={role}
            className={`${display} w-48 py-2 flex-col shadow-lg border-gray-200 bg-white z-10 rounded`}
          >
            <button
              type="button"
              onClick={() => toggle(false)}
              className="text-left hover:bg-brand-100 px-6 py-2">
              Add Journal
            </button>
            <button
              type="button"
              onClick={() => toggle(false)}
              className="text-left hover:bg-brand-100 px-6 py-2">
              Add Event
            </button>
            <button
              type="button"
              onClick={() => toggle(false)}
              className="text-left hover:bg-brand-100 px-6 py-2">
              Add Task
            </button>
          </div>
        );
      };
      
    const Toggle = ({ id, children }) => {
    const [props, { show, toggle }] = useDropdownToggle();
    return (
        <button
        type="button"
        className="btn"
        id={id}
        {...props}>
            {children}
        </button>
    );
    };
      
    const DropdownButton = ({
        show,
        onToggle,
        drop,
        alignEnd,
        title,
        role,
    }) => (
        <Dropdown
            show={show}
            onToggle={onToggle}
            drop={drop}
            alignEnd={alignEnd}
            itemSelector="button:not(:disabled)">
            <span>
                <Toggle id="example-toggle">{title}</Toggle>
                <Menu role={role} />
            </span>
        </Dropdown>
    );
    
    return (
        <div>
            <DropdownButton
                show={show}
                onToggle={(nextShow) => setShow(nextShow)}
                title={`${show ? "Close" : "Add"} Items`}/>
        </div>
    );
};
