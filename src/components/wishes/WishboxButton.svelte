<script>
    function wishboxViewChange() {
        const wishElement = document.getElementById('countLimit');
        const fullwish = document.getElementById('onewish');
        if (wishElement !== null && fullwish !== null) {
            if (wishElement.className == '') {
                wishElement.className = 'grid grid-cols-1 gap-80 my-auto mt-9 scroll-auto	overscroll-none ';
                fullwish.className =
                    'snap-y snap-mandatory h-[90vh] w-screen md:w-full max-w-[349.333px]  mx-auto overflow-x-scroll	space-y-20 shadow-xl outline outline-offset-2 outline-20 md:outline-offset-0 md:outline-0 outline-[#c7722e]';
            } else {
                wishElement.className = '';
                fullwish.className =
                    'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-auto scroll-auto overscroll-none px-2';
            }
        }
    }
</script>

<h2 class="flex flex-col items-center pb-4 ">
    <button
            class=" items-center justify-center self-center rounded-full bg-[#f4a443] p-2 text-white hover:bg-[#c7722e] disabled:bg-cyan-900/30 disabled:text-white/30"
            on:click={wishboxViewChange}
    ><p class="text-md -mt-2">สำหรับเปิดดูทีละคำอวยพร/พร้อมกันทั้งหมด</p>
        <p class="-mb-2 -mt-2 block text-sm">For read each wishes/Read all</p></button
    >
    <small class="mt-1">นายสามารถใช้ปุ่มนี้ เพื่ออ่านทีละคำอวยพรได้นะ!</small>
    <small class="">แนะนำให้นายF11และZoomไม่เกิน <b>175%</b></small>
    <small class="">You can use this button to read each wish!</small>
    <small class="">Recommended to use F11 and Zoom not more than <b>175%</b></small>
</h2>