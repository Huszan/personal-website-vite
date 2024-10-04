import "./ButtonToggle.scss";
import { faSlash, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ButtonToggleProps {
  iconEnabled: IconDefinition;
  iconDisabled?: IconDefinition | undefined;
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  name?: string | undefined;
}

export function ButtonToggle(props: ButtonToggleProps) {
  const { iconEnabled, iconDisabled, state, setState } = props;

  const icon = iconDisabled
    ? state
      ? iconEnabled
      : iconDisabled
    : iconEnabled;

  return (
    <button
      className={state ? "active" : ""}
      onClick={() => setState((prev) => !prev)}
    >
      <div className="icon-border">
        <FontAwesomeIcon icon={icon} className="fa-icon" />
        {!iconDisabled && (
          <FontAwesomeIcon icon={faSlash} className="fa-icon slash-out" />
        )}
      </div>
    </button>
  );
}
