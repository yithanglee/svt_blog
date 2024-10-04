/** @type {import('./$types').PageLoad} */

import { genInputs, postData, buildQueryString } from '$lib/index.js';
import { PHX_HTTP_PROTOCOL, PHX_ENDPOINT } from '$lib/constants';
export const load = async ({ fetch, params, parent }) => {
  var map = await parent();
  let url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT, module;
  var columns = [
    { label: 'Year', data: 'year' },
    { label: 'Outlet', data: 'outlet' },
    { label: 'Transactions', data: 'transactions' },
    { label: 'Amount (RM)', data: 'amount' },
    { label: 'Device', data: 'device', subtitle: { label: 'Long', data: 'device_long' } }
  ];

  // Function to get the number of days in the current month
  function getDaysInCurrentMonth() {
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  }
  // Get the number of days in the current month
  var daysInMonth = getDaysInCurrentMonth();

  // Dynamically append the day_1, day_2, ..., day_N columns
  for (var day = 1; day <= 31; day++) {
    var dayLabel = 'Day ' + day;
    var dayData = 'day_' + day; // This should match the database field names (e.g., day_1, day_2, etc.)

    columns.push({ label: dayLabel, data: dayData });
  }
  var now = new Date();
  var year = now.getFullYear();
  var month = String(now.getMonth() + 1).padStart(2, '0'); // Add 1 since months are zero-indexed

  var now2 = new Date();
  var pyear = now2.getFullYear();
  var pmonth = String(now2.getMonth()).padStart(2, '0'); // Add 1 since months are zero-indexed

  var now3 = new Date();
  var ppyear = now3.getFullYear();
  var ppmonth = String(now3.getMonth() - 1).padStart(2, '0'); // Add 1 since months are zero-indexed

  var yearMonth = year + '-' + month;
var prevYearMonth =  pyear + '-' + pmonth;
var prevYear2Month =  ppyear + '-' + ppmonth;
  console.log(yearMonth);
  let inputs = await genInputs(url, 'Device')
  return {
    module: 'Device',
    inputs: inputs, organization_id: map.user.organization_id,
    columns: columns,
    yearMonth: yearMonth,
    prevYearMonth: prevYearMonth,
    prevYear2Month: prevYear2Month

  };
};
