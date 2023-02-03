import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import { StyledButton } from "../styled/StyledButton";
import { StyledForm } from "../styled/StyledForm";
import { useForm } from "./utils/useForm";
import axios from "axios";


const PlayerDetailsForm = ({ mode }) => {
  const { user, setUser } = useContext(GlobalContext);




  const [values, setValues] = useState({
    favouriteAFLTeam: user.favouriteAFLTeam,
    kickingStat: user.kickingStat,
    handballingStat: user.handballingStat,
    markingStat: user.markingStat,
    speedStat: user.speedStat,
    tacklingStat: user.tacklingStat,
    aboutMe: user.aboutMe,
    favouriteFootballMemory: user.favouriteFootballMemory,

  });
  const [submitted, setSubmitted] = useState(false);






  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const header = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(process.env.REACT_APP_API_URL + "/profile/" + user._id, values, header).then((response) => {
      console.log(response);


      window.location.reload();
    }
    );
    setSubmitted(!submitted)
  };



  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="favouriteAFLTeam">
          Favourite AFL Team
          <select
            type="text"
            name="favouriteAFLTeam"
            value={values.favouriteAFLTeam}
            onChange={handleChange}
          >
            <option value="adelaideCrows">Adelaide Crows</option>
            <option value="brisbaneLions">Brisbane Lions</option>
            <option value="carltonBlues">Carlton Blues</option>
            <option value="collingwoodMagpies">Collingwood Magpies</option>
            <option value="essendonBombers">Essendon Bombers</option>
            <option value="fremantleDockers">Fremantle Dockers</option>
            <option value="geelongCats">Geelong Cats</option>
            <option value="goldCoastSuns">Gold Coast Suns</option>
            <option value="greaterWesternSydneyGiants">
              Greater Western Sydeny Giants
            </option>
            <option value="hawthownHawks">Hawthorn Hawks</option>
            <option value="melbourneDemons">Melbourne Demons</option>
            <option value="northMelbourneKangaroos">
              North Melbourne Kanagroos
            </option>
            <option value="portAdelaidePower">Port Adelaide Power</option>
            <option value="richmondTigers">Richmond Tigers</option>
            <option value="stKildaSaints">St.Kilda Saints</option>
            <option value="sydneySwans">Sydney Swans</option>
            <option value="westCoastEagles">West Coast Eagles</option>
            <option value="westernBulldogs">Western Bulldogs</option>
          </select>
        </label>

        <label htmlFor="kickingStat">
          Kicking /10
          <input
            type="number"
            name="kickingStat"
            value={values.kickingStat}
            onChange={handleChange}
            min="1"
            max="10"
          />
        </label>

        <label htmlFor="handballingStat">
          Handballing /10
          <input
            type="number"
            name="handballingStat"
            value={values.handballingStat}
            onChange={handleChange}
            min="1"
            max="10"
          />
        </label>

        <label htmlFor="markingStat">
          Marking /10
          <input
            type="number"
            name="markingStat"
            value={values.markingStat}
            onChange={handleChange}
            min="1"
            max="10"
          />
        </label>

        <label htmlFor="speedStat">
          Speed /10
          <input
            type="number"
            name="speedStat"
            value={values.speedStat}
            onChange={handleChange}
            min="1"
            max="10"
          />
        </label>

        <label htmlFor="tacklingStat">
          Tackling /10
          <input
            type="number"
            name="tacklingStat"
            value={values.tacklingStat}
            onChange={handleChange}
            min="1"
            max="10"
          />
        </label>

        <label htmlFor="aboutMe">
          About Me
          <textarea
            type="text"
            name="aboutMe"
            value={values.aboutMe}
            onChange={handleChange}
            row={4}
            cols={50}
          />
        </label>

        <label htmlFor="favouriteFootballMemory">
          Favourite Football Memory
          <textarea
            type="text"
            name="favouriteFootballMemory"
            value={values.favouriteFootballMemory}
            onChange={handleChange}
            row={4}
            cols={50}
          />
        </label>
        <button type="submit">Update</button>
      </StyledForm>
    </div>
  );
};

export default PlayerDetailsForm;
