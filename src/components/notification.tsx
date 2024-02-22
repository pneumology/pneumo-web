const Notification = () => {
    return <div className="border rounded border-dashed border-red-600 h-fit px-3 py-2.5 max-w-xs w-fit mb-10">
        <div className="flex gap-2.5 items-center mb-1.5">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.13397 1.5C9.51887 0.833334 10.4811 0.833333 10.866 1.5L17.7942 13.5C18.1791 14.1667 17.698 15 16.9282 15H3.0718C2.302 15 1.82087 14.1667 2.20577 13.5L9.13397 1.5Z" fill="#F61313" />
                <path d="M9.35 5.4H10.6V7.6C10.6 8.5 10.46 9.43 10.39 10.32H9.56C9.49 9.43 9.35 8.5 9.35 7.6V5.4ZM9.25 12.5V11.17H10.65V12.5H9.25Z" fill="white" />
            </svg>

            <h3 className="font-semibold text-xl">Wichtige Mitteilung:</h3>
        </div>
        <div className="text-sm">
            <p>Aufgrund der Vielzahl von Anrufen ist die Telefonanlage häufiger überlastet. Deshalb können Sie Termine nun online oder via Telefon vereinbaren.</p>
            <br />
            <p>Praxis Erlangen:        09131-99 50 500</p>
            <p>Praxis Höchstadt/Aisch: 09193-63 530</p>
        </div>
    </div>
}

export default Notification