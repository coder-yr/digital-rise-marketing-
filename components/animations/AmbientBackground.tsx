export default function AmbientBackground() {
    return (
        <>
            <div
                className="fixed -top-[10%] -right-[5%] w-[500px] h-[500px] bg-dr-gold/10 rounded-full blur-[100px] pointer-events-none"
            />
            <div
                className="fixed top-[40%] -left-[5%] w-[400px] h-[400px] bg-dr-orange/5 rounded-full blur-[100px] pointer-events-none"
            />
        </>
    );
}
