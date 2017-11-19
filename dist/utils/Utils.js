"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debugLogger_1 = require("./debugLogger");
class CUtils {
    constructor() {
    }
    /*ms时间转换为日期对象*/
    static ms2Date(msTime) {
        let _tempDate = new Date(msTime);
        const monthFilter = (month) => {
            switch (month) {
                case '01':
                    return "January";
                case '02':
                    return "February";
                case '03':
                    return "March";
                case '04':
                    return "April";
                case '05':
                    return "May";
                case '06':
                    return "June";
                case '07':
                    return "July";
                case '08':
                    return "August";
                case '09':
                    return "September";
                case '10':
                    return "October";
                case '11':
                    return "November";
                case '12':
                    return "December";
            }
        };
        return {
            year: _tempDate.getFullYear().toString(),
            month: monthFilter((_tempDate.getMonth() + 1) > 9 ? (_tempDate.getMonth() + 1).toString() : '0' + (_tempDate.getMonth() + 1).toString()),
            date: _tempDate.getDate() > 9 ? _tempDate.getDate().toString() : '0' + _tempDate.getDate().toString(),
            hour: _tempDate.getHours() > 9 ? _tempDate.getHours().toString() : '0' + _tempDate.getHours().toString(),
            minute: _tempDate.getMinutes() > 9 ? _tempDate.getMinutes().toString() : '0' + _tempDate.getMinutes().toString()
        };
    }
    /*根据类别名查询改类别下的数据*/
    static searchCateInfo(cateName, cateObj) {
        for (let i of Object.keys(cateObj)) {
            if (cateObj[i].pathName == cateName) {
                return cateObj[i];
            }
        }
    }
    /*http 请求失败后的错误处理*/
    static errorHandle(err, res) {
        if (!err.code) {
            /*请求没有得到响应*/
            res.render('serverError');
            debugLogger_1.default(`java Server Error:${err}`);
        }
        else {
            if (/4*/.test(err.code)) {
                res.render('notFound');
                debugLogger_1.default(`java Server Error:${err.code}`);
            }
            if (/5*/.test(err.code)) {
                res.render('serverError');
                debugLogger_1.default(`java Server Error:${err.code}`);
            }
        }
        /*下面可做扩展*/
    }
    /*遍历取出项目领导人*/
    static findLeader(leaderId, members) {
        for (let item of members) {
            if (leaderId == item.id) {
                return item.username;
            }
        }
    }
    /*分类id与string的映射*/
    static cateFilter(cateString) {
        switch (cateString) {
            case 'inprogress': return 1;
            case 'finished': return 2;
            case 'best': return 3;
            case 'creative': return 4;
            case 'tinny': return 5;
            case 'hangout': return 6;
        }
    }
}
exports.default = CUtils;
//# sourceMappingURL=Utils.js.map