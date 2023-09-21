import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { buttonVariants, colors, sizes } from '../../../utils/constants';
import { StarWarsIcon } from '../../../assets/icons/starwarsIcon';
import { loginUser } from '../../../redux/slices/authenticateSlice';

const defaultValues = {
  username: '',
  password: '',
};

function LoginForm({ navigation }) {
  const { hasError, errorMessage } = useSelector(state => state.authenticate);

  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues,
  });

  const onSubmit = async data => {
    dispatch(loginUser({ data }));
  };

  return (
    <View style={styles.container}>
      <StarWarsIcon />
      <View style={styles.formInputs}>
        <Controller
          control={control}
          name="username"
          rules={{
            required: true,
            minLength: 3,
          }}
          render={({ field, fieldState: { error } }) => (
            <Input
              {...field}
              label="Username"
              id="username"
              error={!!error}
              required
            />
          )}
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="password"
          render={({ field, fieldState: { error } }) => (
            <Input
              {...field}
              label="Password"
              id="password"
              type="password"
              error={!!error}
              required
              secureTextEntry
            />
          )}
        />
        {hasError && errorMessage && (
          <Text style={styles.error}>{errorMessage}</Text>
        )}
        <Button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          color={colors.primary}
          textColor={colors.white}
          variant={buttonVariants.CONTAINED}>
          <Text style={styles.btnText}>Login</Text>
        </Button>
      </View>
    </View>
  );
}

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formInputs: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 15,
    width: '100%',
  },
  title: {
    fontFamily: 'Avenir',
    fontWeight: sizes.WEIGHT700,
    fontSize: sizes.title,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {
    fontFamily: 'Avenir',
    fontSize: sizes.subTitle,
    fontWeight: sizes.WEIGHT800,
    color: colors.white,
  },
  error: {
    textAlign: 'center',
    width: '100%',
    fontFamily: 'Avenir',
    fontSize: sizes.medium,
    fontWeight: sizes.WEIGHT600,
    color: colors.danger,
  },
});
