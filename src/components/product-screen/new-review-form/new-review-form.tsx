import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Fragment } from 'react';
import * as Yup from 'yup';
import { useAppDispatch } from '../../../hooks/store';
import { postReviewAction } from '../../../store/api-actions';
import { Rating, RequiredFieldMessage } from '../../../const';
import './new-review-form.css';

type NewReviewFormProps = {
  guitarId: number,
}

function NewReviewForm({ guitarId }: NewReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();

  const ratingVariants = Object.values(Rating).filter((value) => typeof value === 'number').reverse();

  return (
    <Formik
      initialValues={{
        guitarId,
        userName: '',
        rating: '',
        advantage: '',
        disadvantage: '',
        comment: '',
      }}
      validationSchema={ Yup.object({
        userName: Yup.string()
          .required(RequiredFieldMessage.Text),
        rating: Yup.string()
          .required(RequiredFieldMessage.Radio),
        advantage: Yup.string()
          .required(RequiredFieldMessage.Text),
        disadvantage: Yup.string()
          .required(RequiredFieldMessage.Text),
        comment: Yup.string()
          .required(RequiredFieldMessage.Text),
      }) }
      onSubmit={async (values, { setSubmitting }) => {
        const review = {
          ...values,
          rating: +values.rating,
        };

        try {
          const response = await dispatch(postReviewAction(review));

          if (postReviewAction.rejected.match(response)) {
            throw new Error();
          }
        } catch (error) {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form-review">
          <div className="form-review__wrapper">
            <div className="form-review__name-wrapper">
              <label
                className="form-review__label form-review__label--required"
                htmlFor="userName"
              >
                Ваше Имя
              </label>

              <div className="form-review__row">
                <Field
                  className="form-review__input form-review__input--name"
                  name="userName"
                  type="text"
                  autoComplete="off"
                  data-testid="userName"
                />

                <ErrorMessage
                  className="form-review__warning"
                  component="p"
                  name="userName"
                />
              </div>
            </div>

            <div>
              <span className="form-review__label form-review__label--required">
                Ваша Оценка
              </span>

              <div className="rate rate--reverse">
                { ratingVariants.map((rating) => (
                  <Fragment key={rating}>
                    <Field
                      className="visually-hidden"
                      id={ `star-${rating}` }
                      name="rating"
                      type="radio"
                      value={ rating.toString() }
                      data-testid={ `rating-${rating.toString()}` }
                    />

                    <label
                      className="rate__label"
                      htmlFor={ `star-${rating}` }
                      title={ typeof rating === 'number' ? Rating[rating] : rating }
                    />
                  </Fragment>
                )) }

                <ErrorMessage
                  className="rate__message"
                  component="p"
                  name="rating"
                />
              </div>
            </div>
          </div>


          <label
            className="form-review__label form-review__label--required"
            htmlFor="advantage"
          >
            Достоинства
          </label>

          <div className="form-review__row">

            <Field
              className="form-review__input"
              name="advantage"
              type="text"
              autoComplete="off"
              data-testid="advantage"
            />

            <ErrorMessage
              className="form-review__warning"
              component="p"
              name="advantage"
            />
          </div>

          <label
            className="form-review__label form-review__label--required"
            htmlFor="disadvantage"
          >
            Недостатки
          </label>

          <div className="form-review__row">
            <Field
              className="form-review__input"
              name="disadvantage"
              type="text"
              autoComplete="off"
              data-testid="disadvantage"
            />

            <ErrorMessage
              className="form-review__warning"
              component="p"
              name="disadvantage"
            />
          </div>

          <label
            className="form-review__label form-review__label--required"
            htmlFor="comment"
          >
            Комментарий
          </label>

          <div className="form-review__row">
            <Field
              className="form-review__input form-review__input--textarea"
              name="comment"
              rows={ 10 }
              autoComplete="off"
              as="textarea"
              data-testid="comment"
            />

            <ErrorMessage
              className="form-review__warning"
              component="p"
              name="comment"
            />
          </div>

          <button
            className="button button--medium-20 form-review__button"
            type="submit"
            disabled={ isSubmitting }
          >
            Отправить отзыв
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default NewReviewForm;
