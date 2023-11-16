
<?php
// بدء الجلسة
session_start();
// التحقق من وجود جلسة للمستخدم
if (isset($_SESSION['username'])) {
  // إظهار رسالة ترحيبية
  echo "مرحبا " . $_SESSION['username'] . ", أنت مسجل الدخول بنجاح";
  // إظهار زر لتسجيل الخروج
  echo "<p><a href='logout.php'>تسجيل الخروج</a></p>";
} else {
  // تحويل المستخدم إلى صفحة تسجيل الدخول
  header("Location: login.html");
}
?>

<?php
// بدء الجلسة
session_start();
// إنهاء الجلسة
session_destroy();
// تحويل المستخدم إلى صفحة تسجيل الدخول
header("Location: login.html");
?>