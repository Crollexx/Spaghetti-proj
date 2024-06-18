import React from 'react';
import styles from './styles.module.scss'
import {Field, Form, Formik} from "formik";
import {feedbackQualityValueType, IFeedbackData} from "../../types/feedback";
import {Rating, TextField} from "@mui/material";
import {FieldProps} from "formik/dist/Field";
import * as Yup from 'yup';

interface IFeedbackCardProps {
  onSubmit?: ( value: IFeedbackData ) => void
  initialValues: IFeedbackData
  isEdit?: boolean
}

const validationSchema = Yup.object().shape({
  comment: Yup.string(),
  speed: Yup.number().required('Required'),
  quality: Yup.number().required('Required'),
  qualityBox: Yup.number().required('Required'),
  impression: Yup.number().required('Required'),
});
const FeedbackCard: React.FC<IFeedbackCardProps> = ({
                                                      initialValues,
                                                      onSubmit,
                                                      isEdit = false
                                                    }) => {
  
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={(values) => onSubmit && onSubmit(values)}
    >
      {({ values, errors }) => (
        <Form className={styles.wrapper}>
          <span className={styles.title}>
            Форма орбатной связи
          </span>
          <span className={styles.order}>
            Заказ № {values.orderId}
          </span>
          <div className={styles.fields}>
            <Field
              id="speed"
              name="speed"
            >
              {({ field }: FieldProps<feedbackQualityValueType>) => (
                <div className={styles.row}>
                  <label htmlFor="speed">
                    Скорость доставки
                  </label>
                  <Rating
                    size='large'
                    disabled={!isEdit}
                    name="speed"
                    value={Number(field.value)}
                    onChange={(event) => {
                      field.onChange(event);
                    }}
                  />
                </div>
              )}
            </Field>
            <Field
              id="quality"
              name="quality"
            >
              {({ field }: FieldProps<feedbackQualityValueType>) => (
                <div className={styles.row}>
                  <label htmlFor="quality">
                    Качество спагетти
                  </label>
                  <Rating
                    size='large'
                    disabled={!isEdit}
                    name="quality"
                    value={Number(field.value)}
                    onChange={(event) => {
                      field.onChange(event);
                    }}
                  />
                </div>
              )}
            </Field>
            <Field
              id="qualityBox"
              name="qualityBox"
            >
              {({ field }: FieldProps<feedbackQualityValueType>) => (
                <div className={styles.row}>
                  <label htmlFor="qualityBox">
                    Качество упаковки
                  </label>
                  <Rating
                    size='large'
                    disabled={!isEdit}
                    name="qualityBox"
                    value={Number(field.value)}
                    onChange={(event) => {
                      field.onChange(event);
                    }}
                  />
                </div>
              )}
            </Field>
            <Field
              id="impression"
              name="impression"
            >
              {({ field }: FieldProps<feedbackQualityValueType>) => (
                <div className={styles.row}>
                  <label htmlFor="impression">
                    Общее впечатление
                  </label>
                  <Rating
                    size='large'
                    disabled={!isEdit}
                    name="impression"
                    value={Number(field.value)}
                    onChange={(event, value) =>
                      field.onChange(event)
                    }
                  />
                </div>
              )}
            </Field>
            <Field
              id="comment"
              name="comment"
            >
              {({ field }: FieldProps<feedbackQualityValueType>) => (
              <>
                <TextField
                  id="outlined-multiline-static"
                  disabled={!isEdit}
                  multiline
                  fullWidth
                  rows={4}
                  defaultValue={field.value}
                  className={styles.textarea}
                  onChange={field.onChange}
                  placeholder='Комментарий'
                />
              </>
            )}</Field>
          </div>
          {isEdit ? (
            <button type="submit" className={styles.button}>
              Сохранить
            </button>
          ) : null}
        </Form>
      )}
    </Formik>
  );
};

export default FeedbackCard;