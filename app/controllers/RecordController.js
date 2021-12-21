class RecordController {
    showRecord = async (req, res, next) => {
        res.render('score', {
                title: 'SEM | Kết quả',
            });
    }
}

module.exports = new RecordController;