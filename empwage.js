    const IS_PART_TIME=1;
    const IS_FULL_TIME=2;
    const PART_TIME_HOUR=4;
    const FULL_TIME_HOUR=8;
    const PER_HOUR_WAGE=20;

    function get_Working_Hours(empCheck) {
        switch (empCheck) {
            case IS_PART_TIME:
                return PART_TIME_HOUR;
            case IS_FULL_TIME:
                return FULL_TIME_HOUR;
            default:
                return;
        }
        
    }
    
    let empHour =0;
    let empCheck = Math.floor(Math.random()*10)%3;
    empHour = get_Working_Hours(empCheck);
    let empWage = empHour * PER_HOUR_WAGE;
    console.log("emp Wage : " +empWage); 





