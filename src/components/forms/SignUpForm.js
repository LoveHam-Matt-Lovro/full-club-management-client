import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { StyledForm } from '../styled/StyledForm'
import { useNavigate } from 'react-router-dom'




import { useForm } from "./utils/useForm";

const backup = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    team: "",
    dateOfBirth: "",
    nationality: "",
    role: ""
}

const SignUpForm = ({ user, mode }) => {

    const [values, handleChange, handleSubmit] = useForm({ ...user || backup }, mode, null);

    return (

        <div>
            <StyledForm onSubmit={handleSubmit}>
                <label htmlFor="email">Email *
                <input type="email" name="email" value={values.email} onChange={handleChange} /></label>

                <label htmlFor="password">Password *
                <input type="password" name="password" value={values.password} onChange={handleChange} /></label>

                <label htmlFor="firstName">First Name *
                <input type="text" name="firstName" value={values.firstName} onChange={handleChange} /></label>

                <label htmlFor="lastName">Last Name *
                <input type="text" name="lastName" value={values.lastName} onChange={handleChange} /></label>

                <label htmlFor="dateOfBirth">Date of birth *
                <input type="datetime-local" name="dateOfBirth" value={values.dateOfBirth} onChange={handleChange} /></label>

                <label htmlFor="nationality">Nationality *
                <input type="text" name="nationality" value={values.nationality} onChange={handleChange} /></label>

                <label htmlFor="team">Team *
                <select type="text" name="team" value={values.team} onChange={handleChange} >
                    <option value="mens">Mens</option>
                    <option value="womens">Womens</option>
                </select></label>

                <label htmlFor="role">Club Role *
                <select type="text" name="role" value={values.role} onChange={handleChange} >
                    <option value="player">Player</option>
                    <option value="coach">Coach</option>
                    <option value="boardMember">Board Member</option>
                </select></label>

                <label htmlFor="favouriteAFLTeam">Favourite AFL Team
                <select type="text" name="favouriteAFLTeam" value={values.favouriteAFLTeam} onChange={handleChange} >
                    <option value="adelaideCrows">Adelaide Crows</option>
                    <option value="brisbaneLions">Brisbane Lions</option>
                    <option value="carltonBlues">Carlton Blues</option>
                    <option value="collingwoodMagpies">Collingwood Magpies</option>
                    <option value="essendonBombers">Essendon Bombers</option>
                    <option value="fremantleDockers">Fremantle Dockers</option>
                    <option value="geelongCats">Geelong Cats</option>
                    <option value="goldCoastSuns">Gold Coast Suns</option>
                    <option value="greaterWesternSydneyGiants">Greater Western Sydeny Giants</option>
                    <option value="hawthownHawks">Hawthorn Hawks</option>
                    <option value="melbourneDemons">Melbourne Demons</option>
                    <option value="northMelbourneKangaroos">North Melbourne Kanagroos</option>
                    <option value="portAdelaidePower">Port Adelaide Power</option>
                    <option value="richmondTigers">Richmond Tigers</option>
                    <option value="stKildaSaints">St.Kilda Saints</option>
                    <option value="sydneySwans">Sydney Swans</option>
                    <option value="westCoastEagles">West Coast Eagles</option>
                    <option value="westernBulldogs">Western Bulldogs</option>
                </select></label>

                <label htmlFor="kickingStat">Kicking /10
                <input type="number" name="kickingStat" value={values.kickingStat} onChange={handleChange} min="1" max="10"/></label>

                <label htmlFor="handballingStat">Handballing /10
                <input type="number" name="handballingStat" value={values.handballingStat} onChange={handleChange} min="1" max="10"/></label>

                <label htmlFor="markingStat">Marking /10
                <input type="number" name="markingStat" value={values.markingStat} onChange={handleChange} min="1" max="10"/></label>

                <label htmlFor="speedStat">Speed /10
                <input type="number" name="speedStat" value={values.speedStat} onChange={handleChange} min="1" max="10"/></label>

                <label htmlFor="tacklingStat">Tackling /10
                <input type="number" name="tacklingStat" value={values.tacklingStat} onChange={handleChange} min="1" max="10"/></label>

                <label htmlFor="aboutMe">About Me
                <textarea type="text" name="aboutMe" value={values.aboutMe} onChange={handleChange} row={4} cols={50}/></label>

                <label htmlFor="favouriteFootballMemory">Favourite Football Memory
                <textarea type="text" name="favouriteFootballMemory" value={values.favouriteFootballMemory} onChange={handleChange} row={4} cols={50}/></label>

{/* 
                {values.role}
                <label htmlFor="role">Player
                    <radio type="text" name="role" value= {values.role} onClick={handleChange} /></label>
                <label htmlFor="role">Coach
                    <input type="radio" name="role" value="coach" onClick={handleChange} /> </label> */}


                <button type="submit">Create</button>
            </StyledForm>
        </div>
    )
}

export default SignUpForm