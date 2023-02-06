import { SmallStyledDiv } from "../styled/SmallStyledDiv";
import { formatDate } from "../forms/utils/formatDate";

const gameHeading = ({ game }) => {
    const formattedDate = formatDate(game.date);
    return (
        <div>
            <SmallStyledDiv gameDetailsHeading>
                <h3>
                    {game.league}, Round {game.round}.{" "}
                </h3>
                <h1> v {game.opponent} </h1>

                <h3>
                    at {game.venue}, {formattedDate}
                </h3>
            </SmallStyledDiv>
        </div>
    );
};

export default gameHeading;
