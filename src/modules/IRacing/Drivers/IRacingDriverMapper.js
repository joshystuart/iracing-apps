// @flow
import DriverDto from 'src/modules/IRacing/Drivers/DriverDto';

export default class IRacingDriverMapper {
    _convertMultiple = (messages: Array<any>): Array<DriverDto> => {
        const drivers = [];

        messages.forEach((message) => {
            drivers.push(this._convertSingle(message));
        });

        return drivers;
    };
    _convertSingle = (message: any): DriverDto => {
        const driver = new DriverDto();
        driver.id = message.UserID;
        driver.userName = message.UserName;
        driver.nickName = message.AbbrevName;
        driver.iRating = message.IRating;
        driver.license = message.LicLevel;
        driver.teamName = message.TeamName;
        driver.clubName = message.ClubName;
        driver.carNumber = message.CarNumber;
        return driver;
    };

    convert(message: any | Array<any>): DriverDto | Array<DriverDto> {
        if (message instanceof Array) {
            return this._convertMultiple(message);
        }
        return this._convertSingle(message);
    }
}