import { useContext, useMemo, useRef, useState } from "react";
import AnimatedPage from "../../components/animated/AnimatedPage";
import CustomSection from "../../components/customSection/CustomSection";
import "./SSA.css";
import TextInput from "../../components/text-input/TextInput";
import { Slider } from "@mui/material";
import { SelectBox } from "../../components/donate/Donate";
import { useGetCountriesAndStatesQuery } from "../../app/api-slices/payment";
import Spinner from "../../components/spinner/Spinner";
import {
  currentYearOptions,
  getInitialInfo,
  handleMediaUpload,
  prepareOptions,
  setSlideColor,
} from "../../util/functions";
import {
  applicationStages,
  contents,
  courseDuration,
  headers,
  selectInfos,
} from "../../util/content";
import { GeneralContext } from "../../App";
import FileInput from "../../components/fileInput/FileInput";

const ScholarshipApplication = () => {
  const ssaRef = useRef(null);
  const [stage, setStage] = useState(1);

  const { data: countryData } = useGetCountriesAndStatesQuery();

  const next = () => {
    setStage(stage + 1);
  };
  const back = () => {
    setStage(stage - 1);
  };

  const selectOptions = useMemo(
    () => ({
      country: prepareOptions(countryData),
      courseDuration: prepareOptions(courseDuration),
      //   currentYear:
    }),
    [countryData]
  );

  return (
    <AnimatedPage className={"ssa-page"}>
      <CustomSection id={""} ref={ssaRef}>
        <main>
          {countryData ? (
            <>
              <aside>
                {applicationStages.map(({ id, label, zIndex }) => (
                  <div
                    key={id}
                    className="sliders"
                    onClick={() => setStage(id)}
                  >
                    <Slider
                      disabled
                      defaultValue={100}
                      aria-label="Disabled slider"
                      sx={{
                        "& .MuiSlider-track": {
                          color: setSlideColor(stage, id),
                          opacity: stage === id ? 0.5 : 1,
                        },
                        "& .MuiSlider-thumb": {
                          color: setSlideColor(stage, id, "thumb"),
                        },
                        zIndex,
                      }}
                    />
                    <span className="label">{label}</span>
                  </div>
                ))}
              </aside>
              <Info
                stage={stage}
                initialInfo={getInitialInfo(contents[stage - 1])}
                infoContent={contents[stage - 1]}
                header={headers[stage - 1]}
                next={next}
                back={back}
                selectOptions={selectOptions}
              />
            </>
          ) : (
            <Spinner />
          )}
        </main>
      </CustomSection>
    </AnimatedPage>
  );
};
const fileTypes = ["essay", "lastResult"];
const fileInitialState = { essay: "", lastResult: "" };
const Info = ({
  stage,
  initialInfo,
  infoContent,
  header,
  next,
  back,
  selectOptions,
}) => {
  const { setProcessingDesc } = useContext(GeneralContext);
  const [info, setInfo] = useState(initialInfo);
  const [{ essay, lastResult }, setFileValue] = useState(fileInitialState);

  const handleInput = (e, value) => {
    setInfo((currentInfo) => ({
      ...currentInfo,
      [e.target?.id || e.target?.name]: value || e.target.value,
    }));
  };
  const handleChange = (e) => {
    const loading = () => setProcessingDesc("Uploading...");
    const success = (name, src) => {
      setProcessingDesc("");
      handleInput(e, name);
      setFileValue((current) => ({ ...current, [e.target.id]: src }));
    };
    handleMediaUpload(e, { loading, success });
  };
  const handleSubmit = (e) => {
    e && e.preventDefault && e.preventDefault();
    next();
    //save details to DB
  };

  const canSave = useMemo(
    () => Object.values(info).every((value) => value),
    [info]
  );

  return (
    <section className="info-section">
      <header>
        <h1>{header}</h1>
        <span>All fields are required.</span>
      </header>
      <form onSubmit={handleSubmit}>
        {infoContent.map(({ name, label }) =>
          selectInfos.includes(name) ? (
            <div key={name} className="select-container">
              <label htmlFor={name}>{label}</label>
              <SelectBox
                handleChange={handleInput}
                value={info[name]}
                label={name}
                options={
                  name === "currentYear"
                    ? currentYearOptions(info["courseDuration"])
                    : selectOptions[name]
                }
              />
            </div>
          ) : fileTypes.includes(name) ? (
            <FileInput
              key={name}
              handleChange={handleChange}
              name={name}
              label={label}
              value={info?.[name] || ""}
            />
          ) : (
            <TextInput
              key={name}
              {...{
                value: info?.[name] || "",
                ...(fileTypes.includes(name)
                  ? { handleChange: handleChange }
                  : { handleInput: handleInput }),
                name: name,
                label: label,
              }}
            />
          )
        )}
        <div className="form-actions">
          <button
            type="button"
            className={stage === 1 ? "disabled" : "back"}
            onClick={back}
          >
            Back
          </button>
          <button
            type="submit"
            className={stage === 3 || !canSave ? "disabled" : ""}
          >
            Save & Continue
          </button>
        </div>
      </form>
    </section>
  );
};

export default ScholarshipApplication;
