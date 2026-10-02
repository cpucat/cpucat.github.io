onEvent("settings_dark_checkbox", "click", function( ) { 
  setScreen("Dark_settings"); 
  setChecked("dark_settings_dark_checkbox", true); 
}); 
onEvent("dark_settings_dark_checkbox", "click", function( ) { 
  setScreen("Settings"); 
  setChecked("settings_dark_checkbox", false);
});
onEvent("Dark_settings_home", "click", function( ) {
	setScreen("Dark_home");
});
onEvent("Settings_home_button", "click", function( ) {
	setScreen("home");
});
onEvent("dark_Info_Quiz_btn", "click", function( ) {
	setScreen("quiz_dark");
});
onEvent("quiz_check_btn", "click", function( ) {
	setScreen("quiz_check");
	setText("Quiz_score", "You scored " + randomNumber(1, 100));
});
onEvent("Info_Quiz_btn", "click", function( ) {
	setScreen("quiz");
});
onEvent("dark_quiz_check_btn", "click", function( ) {
	setScreen("dark_quiz_check");
	setText("dark_Quiz_score", "You scored " + randomNumber(1, 100));
});
onEvent("dark_home_info_btn", "click", function( ) {
	setScreen("Dark_info");
});
onEvent("dark_home_settings_btn", "click", function( ) {
	setScreen("Dark_settings");
});
onEvent("dark_home_quiz_btn", "click", function( ) {
	setScreen("quiz_dark");
});
onEvent("home_info_btn", "click", function( ) {
	setScreen("Info");
});
onEvent("home_settings_btn", "click", function( ) {
	setScreen("Settings");
});
onEvent("home_quiz_btn", "click", function( ) {
	setScreen("quiz");
});
onEvent("dark_Info_Home_btn", "click", function( ) {
	setScreen("Dark_home");
});
onEvent("quiz_check_home", "click", function( ) {
	setScreen("home");
});
onEvent("Settings_home_button", "click", function( ) {
	setScreen("home");
});
onEvent("Dark_settings_home", "click", function( ) {
	setScreen("Dark_home");
});
onEvent("dark_quiz_home_btn", "click", function( ) {
	setScreen("Dark_home");
});
onEvent("Info_Home_btn", "click", function( ) {
	setScreen("home");
});
onEvent("dark_quiz_home_btn", "click", function( ) {
	setScreen("Dark_home");
});
onEvent("dark_quiz_info_btn", "click", function( ) {
	setScreen("Dark_info");
});
onEvent("quiz_home_btn", "click", function( ) {
	setScreen("home");
});
onEvent("quiz_info_btn", "click", function( ) {
	setScreen("Info");
});
onEvent("dark_quiz_home", "click", function( ) {
	setScreen("Dark_home");
});
